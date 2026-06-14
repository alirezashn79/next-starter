import Button from '@/components/Button';
import Link from 'next/link';

export default async function Home() {
    return (
        <div className='flex items-center justify-center gap-4 h-screen w-screen'>
            <Link
                href={{
                    pathname: '/client-side',
                }}
            >
                <Button size='xl'>Client Side Test Page</Button>
            </Link>
            <Link
                href={{
                    pathname: '/server-side',
                }}
            >
                <Button size='xl' theme='warning'>
                    Server Side Test Page
                </Button>
            </Link>
        </div>
    );
}
