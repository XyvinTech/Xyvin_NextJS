'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";

type VideoPlayerProps = {
    videoId: string;
    thumbnail: string;
}

const VideoPlayer = ({ videoId, thumbnail }: VideoPlayerProps) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div>
            {isVideoPlaying ? (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <div className='relative lg:w-[635px] lg:h-[340px] w-full h-[200px]'>
                    <Image
                        src={thumbnail}
                        alt="Play video"
                        onClick={handlePlayVideo}
                        // layout="fill"
                        objectFit="cover"
                        width={635}
                        height={340}
                        className='cursor-pointer lg:w-[635px] lg:h-[340px] w-full h-[200px]'
                    />
                    <button 
                        onClick={handlePlayVideo}
                        className='bg-[#7C56FE9E] p-3 px-4 rounded-md hover:bg-[#7d56fec0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        aria-label="Play Video"
                    >
                        <FaPlay color='#fff' size={24}/>
                    </button>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
