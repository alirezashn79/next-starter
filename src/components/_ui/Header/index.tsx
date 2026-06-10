'use client';

const Header = () => {
    // const { theme, setTheme } = useTheme();
    // const [appliedTheme, setAppliedTheme] = useState<'light' | 'dark'>('light');

    // useEffect(() => {
    //     if (theme === 'system') {
    //         const isDark = window.matchMedia(
    //             '(prefers-color-scheme: dark)',
    //         ).matches;
    //         setAppliedTheme(isDark ? 'dark' : 'light');
    //     } else {
    //         setAppliedTheme(theme);
    //     }
    // }, [theme]);

    // const nextTheme = appliedTheme === 'dark' ? 'light' : 'dark';

    return (
        <header className='bg-primary'>
            Header
            {/* <Button
                onClick={() => setTheme(nextTheme)}
                theme='secondary'
                size='sm'
            >
                change theme
            </Button> */}
        </header>
    );
};

export default Header;
