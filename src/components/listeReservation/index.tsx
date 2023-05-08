import {Flex} from "../styles/flex";
import { Text } from '@nextui-org/react';
import {TableWrapper} from "../table/reserveTable/reservetable";

const RecentReservation = () => {
    return (
        <Flex
            css={{
                'mt': '$5',
                'px': '$6',
                '@sm': {
                    mt: '$10',
                    px: '$16',
                },
            }}
            justify={'center'}
            direction={'column'}
        >
            <Text h3>All Reservations</Text>
            <Flex
                css={{ gap: '$8' }}
                align={'center'}
                justify={'between'}
                wrap={'wrap'}
            >
                <Flex
                    css={{
                        'gap': '$6',
                        'flexWrap': 'wrap',
                        '@sm': { flexWrap: 'nowrap' },
                    }}
                    align={'center'}
                >

                </Flex>

            </Flex>

            <TableWrapper /> {/*users={filteredCars}*/}
        </Flex>
    );
};
export default RecentReservation;