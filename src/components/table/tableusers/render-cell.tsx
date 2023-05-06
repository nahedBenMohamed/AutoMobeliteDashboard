import {Col, Row, User, Text} from '@nextui-org/react';
import React from 'react';
import {users} from './data';
import {StyledBadge} from './table.styled';

interface Props {
   user: typeof users[number];
   columnKey: string | React.Key;
}

export const RenderCell = ({user, columnKey}: Props) => {
   // @ts-ignore
   const cellValue = user[columnKey];
   switch (columnKey) {
      case 'name':
         return (
             <User squared src={user.avatar} name={cellValue} css={{p: 0}}>

             </User>
         );
      case 'email':
         return (
             <Col>
                <Row>
                   <Text b size={14} css={{tt: 'capitalize'}}>
                      {cellValue}
                   </Text>
                </Row>
                <Row>
                   <Text
                       b
                       size={13}
                       css={{tt: 'capitalize', color: '$accents7'}}
                   >
                   </Text>
                </Row>
             </Col>
         );
      case 'status':
         return (
             // @ts-ignore
             <StyledBadge type={String(user.status)}>{cellValue}</StyledBadge>
         );

      default:
         return cellValue;
   }
};
