import { Col, Row,Text, Tooltip } from '@nextui-org/react';
import { IconButton } from '@mui/material';
import React from 'react';
import {reserve} from "./reservedata";
import {StyledBadge} from "./reservetable.styled";
import {EyeIcon} from "../../icons/table/eye-icon";


interface Props {
    reserve: typeof reserve[number];
   columnKey: string | React.Key;
}

export const ReserveCell = ({reserve, columnKey}: Props) => {
   // @ts-ignore
   const cellValue = reserve[columnKey];
   switch (columnKey) {
       case 'name':
       case 'firstname':
       case 'vehicule':
       case 'cost':
       case 'debut':
       case 'fin':
       case 'pickup':
       case 'pickdown':
           return (
               <Col  style={{textAlign: "center"}}>
                   <Row>
                       <Text b size={13} css={{ tt: 'capitalize' }}>
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
           return <StyledBadge type={String(reserve.status)}>{cellValue}</StyledBadge>;
       case 'actions':
           return (
               <Row justify="center" align="center" css={{ gap: '$8', '@md': { gap: 0 } }}>
                   <Col css={{ d: 'flex' }}>
                       <Tooltip content="Details">
                           <a href={`/details/`}> {/*${user.id}*/}
                               <IconButton onClick={() => console.log('View user', reserve.id)}>
                                   <EyeIcon size={20} fill="#979797" />
                               </IconButton>
                           </a>
                       </Tooltip>
                   </Col>
               </Row>
           );
       default:
           return cellValue;
   }
};
