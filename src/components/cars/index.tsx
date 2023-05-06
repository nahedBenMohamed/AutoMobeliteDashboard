import { useState } from 'react';
import { Input, Text } from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { TableWrapper } from '../table/tablecars/carList';
import { AddCar } from './add-car';
//import { users} from "../table/carList";

export const Cars = () => {
    const [searchText, setSearchText] = useState('');

/*    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredCars = users.filter((name) => {
            return users.name.toLowerCase().includes(searchText.toLowerCase());
        }
    );*/

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
            <Text h3>All Cars</Text>
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
                    <Input
                        css={{ width: '100%', maxW: '410px' }}
                        placeholder="Search cars"
                        /*value={searchText}
                        onChange={handleSearchChange}*/
                    />
                </Flex>
                <Flex direction={'row'} css={{ gap: '$6' }} wrap={'wrap'}>
                    <AddCar />
                </Flex>
            </Flex>

            <TableWrapper /> {/*users={filteredCars}*/}
        </Flex>
    );
};
