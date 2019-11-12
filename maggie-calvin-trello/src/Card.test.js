import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import store from './store';
import renderer from 'react-test-renderer';

describe('<Card />', ()=>{
it('renders without crashing', () => {
  const div = document.createElement('div');
  const title = store.allCards['a'].title;
  const content = store.allCards['a'].content;
  ReactDOM.render(<Card title={title} content={content}/>, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('Renders UI as expected', ()=> {
  const tree = renderer.create(<Card title={"This is a card"}
                                      content={"this is the content of the card"}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
});