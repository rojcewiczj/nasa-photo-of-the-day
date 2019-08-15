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
       NASA photo-of-the-day
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        
          <Dropdown.Menu>
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
       
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
    <Photo />

    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
            
        
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Support NASA' />
            <p>
              learn how you cna help support NASA!
            </p>
          </Grid.Column>
       
        <Divider inverted section />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  
  </div>
)

export default FixedMenuLayout