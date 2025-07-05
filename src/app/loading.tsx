"use client"
import { useState } from 'react';
import {
    ClipLoader,
    PulseLoader,
    RingLoader,
    ScaleLoader,
} from 'react-spinners';

const config = {
    size: 200,
    color: '#ec4899',
    loading: true,
};

const loaders = [
    <RingLoader {...config} />,
    <PulseLoader {...config} size={20} />,
    <ScaleLoader {...config} />,
    <ClipLoader {...config} />,
];

export default function Loading() {
    const [currentLoaderIndex, setCurrentLoaderIndex] = useState(
        Math.floor(Math.random() * loaders.length)
    );

    return (
        <>
            <div className="fixed w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-[9999]">
                {currentLoaderIndex !== null && loaders[currentLoaderIndex]}
                <div className="mt-8 text-center">
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-300 animate-pulse">
                        Đang tải ứng dụng...
                    </p>
                    <div className="mt-4 flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
