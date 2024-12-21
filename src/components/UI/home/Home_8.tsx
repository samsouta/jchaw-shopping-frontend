import React, { useState } from 'react';
import { Button, Input } from '@mantine/core';
import { Alert } from '@mui/material';

const Home_8: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [alert, setAlert] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const validateEmail = (email: string) => {
        // Basic email pattern validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Handler for input change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const JoinMember = () => {
        if (inputValue) {
            if (!validateEmail(inputValue)) {
                setAlert(true);
                setShow(false);
            } else {
                setAlert(false);
                setShow(true);
            }
        } else {
            setAlert(true);
            setShow(false);
        }
    };

    return (
        <div className="mt-20 px-4">
            <div className="flex flex-col items-center gap-y-6">
                <h1 className="text-[var(--dark-brown)]  text-3xl font-bold text-center">
                    Join J-Shop's Family
                </h1>
                
                {/* Success/Alert Messages */}
                {show && (
                    <Alert severity="success" className="w-full max-w-md">
                        Requested successfully
                    </Alert>
                )}
                {alert && (
                    <Alert severity="error" className="w-full max-w-md">
                        Please enter a valid email address
                    </Alert>
                )}

                {/* Input and Button */}
                <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Input
                        id="userInput"
                        value={inputValue}
                        onChange={handleChange}
                        className="w-full sm:max-w-md"
                        variant="filled"
                        size="lg"
                        radius="xs"
                        placeholder="Enter Your Email"
                    />
                    <Button
                        onClick={JoinMember}
                        variant="filled"
                        size="lg"
                        radius="xs"
                        color="dark"
                        className="w-full sm:w-auto bg-[var(--tan)] text-[var(--dark-brown)] hover:bg-[var(--dark-brown)] hover:text-white"
                    >
                        <span className="button-text">Join Family</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home_8;