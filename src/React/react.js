var RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
var REACT_ELEMENT_TYPE = Symbol.for('react.element');


function createElement (type, config, children){
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null;
    if(config != null){
        if(config.ref){
            ref = config.ref
        }
        if(config.key){
            key=config.key
        }
        for(propName in config){
            if(!RESERVED_PROPS.hasOwnProperty(propName)){
                props[propName] = config[propName]
            }
        }
    }

    var childrenLength = arguments.length - 2;
    if(childrenLength === 1){
        props.children = children
    }else if(childrenLength > 1){
        var childArray = new Array(childrenLength)
        for(var i = 0;i<childrenLength;i++){
            childArray[i] = arguments[i+2]
        }
    }

    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        ref: ref,
        props: props,
      };
}

const React = {
    createElement
}

export default React