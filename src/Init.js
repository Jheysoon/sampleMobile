import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';

const Init = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <Button full style={styles.buttonStyle}>
          <Text>Login</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
  },
});

export default Init;
