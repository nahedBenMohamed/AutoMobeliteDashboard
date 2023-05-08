import {Table} from '@nextui-org/react';
import React from 'react';
import {Box} from '../../styles/box';
import {ReserveCell} from './reserve-cell';
import {columns, reserve} from "./reservedata";

export const TableWrapper = () => {
   return (
      <Box
         css={{
            '& .nextui-table-container': {
               boxShadow: 'none',
            },
         }}
      >
         <Table
            aria-label="Example table with custom cells"
            css={{
               height: 'auto',
               minWidth: '100%',
               boxShadow: 'none',
               width: '100%',
               px: 0,
            }}
         >
            <Table.Header columns={columns}>
               {(column) => (
                  <Table.Column
                     key={column.uid}
                     align='center'
                     style={{ padding: '20px' }}
                  >
                     {column.name}
                  </Table.Column>
               )}
            </Table.Header>
            <Table.Body items={reserve}>
               {(item) => (
                  <Table.Row>
                     {(columnKey) => (
                        <Table.Cell>
                           {ReserveCell({reserve: item, columnKey: columnKey})}
                        </Table.Cell>
                     )}
                  </Table.Row>
               )}
            </Table.Body>
            <Table.Pagination
               shadow
               noMargin
               align="center"
               rowsPerPage={3}
               onPageChange={(page) => console.log({page})}
            />
         </Table>
      </Box>
   );
};
