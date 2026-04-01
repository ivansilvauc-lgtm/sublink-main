import React from 'react'

interface MobileBackButtonProps {
    handleButtonClick: (linkName: string | null) => void
}
export const MobileBackButton = ({ handleButtonClick }: MobileBackButtonProps) => {
    return (
        <div className={`absolute top-4 left-0 rounded-r-full bg-zinc-800 shadow-md w-12 h-12 rounded-lg flex justify-center items-center z-50`}>
            <button onClick={() => handleButtonClick(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
            </button>
        </div>
    )
}
