import { Col, Row, User, Text, Tooltip } from '@nextui-org/react';
import React from 'react';
import { IconButton } from '@mui/material';
import { users } from './datacars';
import { StyledBadge } from './cartable.style';

import { EditIcon } from '../../icons/table/edit-icon';
import { EyeIcon } from '../../icons/table/eye-icon';
import { DeleteIcon } from '../../icons/table/delete-icon';

interface Props {
    user: typeof users[number];
    columnKey: string | React.Key;
}

export const RenderCell = ({ user, columnKey }: Props) => {
    // @ts-ignore
    const cellValue = user[columnKey];
    switch (columnKey) {
        case 'marque':
        case 'model':
        case 'matricule':
        case 'year':
        case 'kilometers':
        case 'color':
        case 'type':
        case 'cost':
            // Add border right to each Col except the last one
/*            const colStyle: React.CSSProperties = {
                borderRight: columnKey !== "cost" ? '5px solid #ccc' : 'none',
                paddingRight: '8px',
                textAlign : "center",
            };*/
            return (
                <Col  style={{textAlign: "center"}}>
                    <Row>
                        <Text b size={14} css={{ tt: 'capitalize' }}>
                            {cellValue}
                        </Text>
                    </Row>
                    <Row>
                        <Text b size={13} css={{ tt: 'capitalize', color: '$accents7' }}></Text>
                    </Row>
                </Col>
            );
        case 'status':
            // @ts-ignore
            return <StyledBadge type={String(user.status)}>{cellValue}</StyledBadge>;
        case 'actions':
            return (
                <Row justify="center" align="center" css={{ gap: '$8', '@md': { gap: 0 } }}>
                    <Col css={{ d: 'flex' }}>
                        <Tooltip content="Details car">
                            <a href={`/details/`}> {/*${user.id}*/}
                            <IconButton onClick={() => console.log('View user', user.id)}>
                                <EyeIcon size={20} fill="#979797" />
                            </IconButton>
                            </a>
                        </Tooltip>
                    </Col>
                    <Col css={{ d: 'flex' }}>
                        <Tooltip content="Edit car">
                            <IconButton onClick={() => console.log('Edit car', user.id)}>
                                <EditIcon size={20} fill="#979797" />
                            </IconButton>
                        </Tooltip>
                    </Col>
                    <Col css={{ d: 'flex' }}>
                        <Tooltip content="Delete car" color="error" onClick={() => console.log('Delete car', user.id)}>
                            <IconButton>
                                <DeleteIcon size={20} fill="#FF0080" />
                            </IconButton>
                        </Tooltip>
                    </Col>
                </Row>
            );
        default:
            return cellValue;
    }
};
