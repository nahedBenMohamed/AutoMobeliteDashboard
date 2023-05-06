import {Button, Divider, Input, Modal, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const AddCar = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
    };

    return (
        <div>
            <Button auto onClick={handler}>
                Add Car
            </Button>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                width="600px"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header css={{justifyContent: 'start'}}>
                    <Text id="modal-title" h4>
                        Add new Car
                    </Text>
                </Modal.Header>
                <Divider css={{my: '$5'}} />
                <Modal.Body css={{py: '$10'}}>
                    <Flex
                        direction={'column'}
                        css={{
                            'flexWrap': 'wrap',
                            'gap': '$8',
                            '@lg': {flexWrap: 'nowrap', gap: '$12'},
                        }}
                    >
                        <Flex
                            css={{
                                'gap': '$10',
                                'flexWrap': 'wrap',
                                '@lg': {flexWrap: 'nowrap'},
                            }}
                        >
                            <Input
                                label="Marque"
                                bordered
                                clearable
                                fullWidth
                                size="lg"
                                placeholder="Marque"
                            />
                            <Input
                                label="Models"
                                clearable
                                bordered
                                fullWidth
                                size="lg"
                                placeholder="Models"
                            />
                        </Flex>

                        <Flex
                            css={{
                                'gap': '$10',
                                'flexWrap': 'wrap',
                                '@lg': {flexWrap: 'nowrap'},
                            }}
                        >
                            <Input
                                label="Matricule"
                                clearable
                                bordered
                                fullWidth
                                size="lg"
                                placeholder="Matricule"
                            />
                            <Input
                                label="Year"
                                clearable
                                bordered
                                fullWidth
                                size="lg"
                                placeholder="Year"
                            />
                        </Flex>
                        <Flex
                            css={{
                                'gap': '$10',
                                'flexWrap': 'wrap',
                                '@lg': {flexWrap: 'nowrap'},
                            }}
                        >
                            <Input
                                label="Kilometers"
                                clearable
                                bordered
                                fullWidth
                                size="lg"
                                placeholder="Kilometers"
                            />
                            <Input
                                label="Color"
                                clearable
                                bordered
                                fullWidth
                                size="lg"
                                placeholder="Color"
                            />
                            <Input
                                label="Type"
                                clearable
                                bordered
                                fullWidth
                                size="lg"
                                placeholder="Type"
                            />
                            <Input
                                label="Cost"
                                clearable
                                bordered
                                fullWidth
                                size="lg"
                                placeholder="Cost"
                            />
                            <Input
                                label="Status"
                                clearable
                                bordered
                                fullWidth
                                size="lg"
                                placeholder="Status"
                            />
                        </Flex>
                    </Flex>
                </Modal.Body>
                <Divider css={{my: '$5'}} />
                <Modal.Footer>
                    <Button auto onClick={closeHandler}>
                        Add Car
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};