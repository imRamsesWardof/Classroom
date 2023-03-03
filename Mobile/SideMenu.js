import * as React from 'react';
import { Drawer } from 'react-native-paper';

const MyComponent = () => (
    <Drawer>
    <Drawer.Item
     style={{ backgroundColor: '#64ffda' }}
     icon="star"
     label="First Item"
   />
   <Drawer.Item
     style={{ backgroundColor: '#64ffda' }}
     icon="star"
     label="First Item"
   />
   <Drawer.Item
     style={{ backgroundColor: '#64ffda' }}
     icon="star"
     label="First Item"
   />
    </Drawer>
);

export default MyComponent;