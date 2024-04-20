import React, { useState, useRef } from 'react';
import { IconButton, LinearProgress } from '@mui/material';
import { PlayArrow, Pause, Stop } from '@mui/icons-material';
import { useQuery } from '@apollo/client';
import { GET_PLAY_MUSIC } from '@/graphql/queries';
import Loading from '@/app/loading';

interface MusicPlayerProps {
    slug: string
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ slug }) => {
    const { data, loading } = useQuery(GET_PLAY_MUSIC, {
        variables: { slug: slug }
    })

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (audioRef.current) {            
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const stop = () => {
        if (audioRef.current) {            
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const updateTime = () => {
        if (audioRef.current) {            
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    };

    if (loading) return <Loading />

    return (
        <div>
            <audio
                ref={audioRef}
                src={data?.music?.file?.url}
                onTimeUpdate={updateTime}
                onEnded={() => setIsPlaying(false)}
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton onClick={togglePlay}>
                    {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>
                <IconButton onClick={stop}>
                    <Stop />
                </IconButton>
            </div>
            <LinearProgress
                variant="determinate"
                value={(currentTime / duration) * 100}
                style={{ marginTop: '20px', marginBottom: '20px' }}
            />
        </div>
    );
};

export default MusicPlayer;
