import Loading from '@/components/Loading';

const Spinner = () => {
    return (
        <div className='mx-auto h-screen w-screen flex items-center justify-center flex-col gap-4'>
            <p> Page Loading</p>
            <Loading type='dots' size='xl' />
        </div>
    );
};

export default Spinner;
