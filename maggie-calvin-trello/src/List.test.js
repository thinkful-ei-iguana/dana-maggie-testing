import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import store from './store';
import { exportAllDeclaration } from '@babel/types';

describe('<List />', ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        let storeList = store.lists.map(list => 
            (<List header={list.header} cards={store.getCards(list.cardIds)}/>));
        let Lists = <div>{storeList}</div>;
        ReactDOM.render(Lists, div);
        
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        let tree = renderer.create(<List header={'Some other List'}
                                        cards={['s','h','p']}
            />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});