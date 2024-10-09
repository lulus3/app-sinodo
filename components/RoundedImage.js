import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Svg, { ClipPath, Defs, Rect } from 'react-native-svg';

const RoundedImage = ({ source, borderRadius }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    Image.getSize(source.uri, (width, height) => {
      setDimensions({ width, height });
    });
  }, [source]);

  return (
    <View style={{ ...dimensions, borderRadius, overflow: 'hidden' }}>
      {dimensions.width > 0 && (
        <>
          <Svg height={dimensions.height} width={dimensions.width} style={{ position: 'absolute' }}>
            <Defs>
              <ClipPath id="clip">
                <Rect
                  x="0"
                  y="0"
                  width={dimensions.width}
                  height={dimensions.height}
                  rx={borderRadius}
                  ry={borderRadius}
                />
              </ClipPath>
            </Defs>
            <Rect
              x="0"
              y="0"
              width={dimensions.width}
              height={dimensions.height}
              clipPath="url(#clip)"
              fill="white"
            />
          </Svg>
          <Image
            source={source}
            style={{ ...dimensions }}
            resizeMode="cover"
          />
        </>
      )}
    </View>
  );
};

export default RoundedImage;