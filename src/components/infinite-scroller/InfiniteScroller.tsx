import { useCallback, useState } from 'react';
import crypto from 'crypto';
import InfiniteScroll from 'react-infinite-scroller';

type UserType = {
    id: string;
    name: string;
    email: string;
    gender: 'male' | 'female' | 'unknown';
    status: 'active' | 'inactive';
};

const createRandomUser: () => UserType = () => {
    const id = crypto.randomBytes(16).toString('base64').substring(0, 16);
    const name = id.substring(0, 4);
    const email = name + '@gmail.com';
    let gender: 'male' | 'female' | 'unknown';
    switch ((Math.random() * 100) % 2) {
        case 0:
            gender = 'male';
            break;
        case 1:
            gender = 'female';
            break;
        default:
            gender = 'unknown';
            break;
    }
    return {
        id,
        name,
        email,
        gender,
        status: 'active',
    };
};

const sleep = (sec: number) =>
    new Promise((resolve) => setTimeout(resolve, sec * 1000));

export default function InfiniteScroller(): JSX.Element {
    const [users, setUsers] = useState<UserType[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const loadUser = useCallback(async (page: number) => {
        await sleep(1.0);
        const newUsers: UserType[] = [];
        for (let i = 0; i < 3; i++) {
            newUsers.push(createRandomUser());
        }
        setUsers((current) => {
            console.log(current.length + newUsers.length);
            return [...current, ...newUsers];
        });
        setHasMore(() => page < 30);
    }, []);

    const handleScroll = (page: number) => {
        if (isLoading) {
            console.log('still loading');
            return;
        }
        setIsLoading(true);
        loadUser(page).then(() => setIsLoading(false));
    };

    return (
        <div
            className='container mt-4 p-4'
            style={{ height: '100px', width: '50%', overflow: 'auto' }}
        >
            <InfiniteScroll
                key={'infinite-scroll'}
                pageStart={1}
                loadMore={handleScroll}
                loader={
                    <progress
                        key={0}
                        className='progress is-success is-radiusless'
                    ></progress>
                }
                hasMore={hasMore}
                useWindow={false}
                threshold={30}
                style={{ height: '100%' }}
            >
                <ul className='list'>
                    {users.map((user, ix) => (
                        <li
                            className='list-item p-2'
                            style={{ borderBottom: 'solid 1px #ccc' }}
                            key={ix}
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
            </InfiniteScroll>
        </div>
    );
}
