import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter.js'

const COLOR_INCREMENT = 15;

//define reducer outside component
const reducer = (state, action) => { //action -> how we are going to change our state object
    // state -> { red: number, green: number, blue: number }
    // action -> { type: 'change_red' || 'change_green' || 'change_blue, payload: 15 || -15 }

    switch(action.type)
    {
        case 'change_red':
            // never going to do: state.red = state.red - 15
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
}

const SquareScreen = () => {
    // dont use useState and reducer at same time use one or the other
    // const [red, setRed,] = useState(0);
    // const [green, setGreen,] = useState(0);
    // const [blue, setBlue,] = useState(0);

    // const setColor = (color, change) => {
    //     switch(color)
    //     {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             return;
    //             case 'green':
    //                 green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //                 return;
    //             case 'blue':
    //                 blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //                 return;
    //             default:
    //                 return;
    //     }
    // }
                                                        //this is state
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    //dispatch runs the reducer

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
                color='Red' />

            <ColorCounter
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
                color='Green' />

            <ColorCounter
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
                color='Blue' />

            <View style={{height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}} />
        </View>
    );
};



export default SquareScreen;