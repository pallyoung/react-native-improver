'use strict'
import React, { Component } from 'react';
import { Image } from 'react-native';
import { redefineComponent } from './uitl';
class Image2 extends Component {
    constructor(...props) {
        super(...props);
    }
    render() {
        let {height, width} = this.state;
        return (
            <Image
                seed={true}
                {...this.props}
                onLayout={(e) => {
                    let {height, width} = e.nativeEvent.layout;
                    if (this.state.width != width) {
                        this.setState({ height, width });
                    }
                    this.props.onLayout && this.props.onLayout(e);
                } }
                onLoad={(e) => {
                    this.setState({ loaded: true })
                    this.props.onLoad && this.props.onLoad(e);
                } }
                >
                {!this.state.loaded && this.props.placeholder && <Image seed={true}
                    source={this.props.placeholder}
                    style={{ height, width, backgroundColor: 'rgba(237,237,237,1)' }}
                    resizeMode='center' /> || null}
            </Image>
        );
    }
}

redefineComponent(Image, {
    renderDefiner: function (originalRender) {
        return function () {
            if (this.props.seed) {
                return originalRender(this)
            }else {
                return <Image2 {...this.props}/>
            }
        }
    },
    propTypes:{
        placeholder:Image.propTypes.
    }
});