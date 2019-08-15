import React from 'react'
import Photo from './Photo';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
       NASA photo-of-the-day!
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
    

    </Container>

  
  </div>
)

export default FixedMenuLayout