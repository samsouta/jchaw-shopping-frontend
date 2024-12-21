import React, { useState } from 'react';
import { TextInput, Button, Group, Box, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { cu_1 } from '../../../assets/svg';
import JToast from '../toast/JToast';
import { socialMediaList } from '../../../data/contact';


const ContactBox: React.FC = () => {
    const [message, setMessage] = useState(false)
    const form = useForm({
        initialValues: {
            name: "",
            email: '',
            rpMessage: "",
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSubmit = (values: { name: string; email: string; rpMessage: string }) => {
        setMessage(true)
        form.reset(); // Form ကို reset လုပ်၍ input fields ကို empty ပြုလုပ်သည်
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    };

    const handleMedialist = (id:number) => {
        const selectedMedia = socialMediaList.find(item => item.id === id);
        if (selectedMedia) {
            window.open(selectedMedia.url, '_blank');
        }
    }

    return (
        <div className="relative bg-[var(--tan)] h-full grid grid-cols-1 lg:grid-cols-12 mt-10 rounded-3xl p-6 gap-6">
            <div className="col-span-1 lg:col-span-6 flex justify-center items-center">
                <img src={cu_1} alt="Contact Us Illustration" className="w-full max-w-sm lg:max-w-full" />
            </div>
            <div id="input-form" className="col-span-1 lg:col-span-6 flex flex-col justify-center">
                <Box maw={400} mx="auto" className="w-full">
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <TextInput
                            mt="md"
                            size="md"
                            withAsterisk
                            variant="filled"
                            id="name"
                            radius="md"
                            placeholder="Your name"
                            label="Name"
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            mt="md"
                            size="md"
                            withAsterisk
                            id="email"
                            variant="filled"
                            radius="md"
                            placeholder="your@email.com"
                            label="Email"
                            {...form.getInputProps('email')}
                        />
                        <Textarea
                            mt="md"
                            size="md"
                            variant="filled"
                            radius="md"
                            placeholder="Your message"
                            label="Message"
                            {...form.getInputProps('rpMessage')}
                        />
                        <Group position="right" mt="md">
                            <Button color="var(--gold)" type="submit">
                                Send
                            </Button>
                        </Group>
                    </form>
                </Box>
                <div className="flex justify-center items-center mt-8">
                    <span className="text-[var(--green)] text-nun text-2xl">Or</span>
                </div>
                <div className="flex justify-center mt-4 gap-x-5">
                    {
                        socialMediaList?.map((item) => (
                            <span onClick={()=>handleMedialist(item.id)} key={item?.id} className="cursor-pointer">
                                <img
                                    className="h-[50px] w-[50px] bg-[var(--off-white)] shadow-md p-2 rounded-full"
                                    src={item?.icon}
                                    alt="Facebook"
                                />
                            </span>
                        ))
                    }
                </div>
            </div>
            {
                message &&
                <div className=' absolute top-0 right-0 z-50' ><JToast /></div>
            }
        </div>
    );
};

export default ContactBox;
