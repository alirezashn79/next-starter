import { getAllBlogsServer } from '@/utils/api/services/hotel.server';
import Image from 'next/image';

export default async function Home() {
    const response = await getAllBlogsServer();

    const image = response.data.blogs?.[0]?.image;

    return (
        <div>
            <Image src={image} height={200} width={200} alt='some' />
        </div>
    );
}
// 'use client';

// import Button from '@/components/Button';
// import { login } from '@/utils/api/services/auth.client';
// import { getAllHotelsClient } from '@/utils/api/services/hotel.client';
// import { Alert } from '@/utils/funcs/alert';
// import useCustomMutation from '@/utils/hooks/useCustomMutation';
// import useCustomQuery from '@/utils/hooks/useCustomQuery';
// import { useQueryClient } from '@tanstack/react-query';
// import Image from 'next/image';

// export default function Home() {
//     const {
//         mutateAsync,
//         isPending,
//         data: responseData,
//     } = useCustomMutation({
//         mutationFn: (values: any) => login(values),
//         onSuccess: (responseData: any) => {
//             Alert.success(responseData?.message || 'ورود موفقیت آمیز');
//         },
//     });
//     const queryClient = useQueryClient();

//     const { data, isLoading } = useCustomQuery({
//         queryKey: ['CATEGORIES'],
//         queryFn: () => getAllHotelsClient(),
//     });

//     const image = data?.data.blogs?.[0]?.image;

//     const onSubmit = async () => {
//         const values = {
//             email: 'mojtabazfr5@gmail.com',
//             password: '66422321',
//         };
//         await mutateAsync(values);
//     };

//     const onConfirm = async () => {
//         await Alert.confirm('آیا مطمئن هستید؟', onSubmit, {
//             invalidateKeys: [['USER']],
//             queryClient: queryClient,
//             swalOptions: {
//                 title: 'ورود به سیستم',
//                 text: 'آیا برای ورود اطمینان دارید؟',
//             },
//         });
//     };

//     return (
//         <div>
//             <Button onClick={onConfirm} isLoading={isPending}>
//                 Send
//             </Button>

//             <Image src={image} height={200} width={200} alt='some' />
//             {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
//         </div>
//     );
// }
