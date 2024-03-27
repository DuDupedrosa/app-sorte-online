import { Button, Text } from 'native-base';
import { useState } from 'react';

type ComponentTypes = {
  label: string;
  // props que são nativas do button do native-base ex: backgroud, margin...
  buttonProps?: Record<string, any>;

  // props que eu preciso na tag Text ex: style
  labelProps?: Record<string, any>;

  // actions methods
  onPressIn?: () => void;
  onPressOut?: () => void;
  onPress?: () => void;
};

export default function ButtonComponent({
  label,
  buttonProps,
  labelProps,
  onPress,
  onPressIn,
  onPressOut,
}: ComponentTypes) {
  const [pressed, setPressed] = useState(false);

  // garantindo que vamos ter controle das chamadas pressIn and pressOut
  const handlePressIn = () => {
    setPressed(true);

    if (onPressIn) {
      onPressIn();
    }
  };

  const handlePressOut = () => {
    setPressed(false);

    if (onPressOut) {
      onPressOut();
    }
  };

  const handleOnPress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <Button
      {...buttonProps}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handleOnPress}
      opacity={pressed ? 50 : 100}
    >
      <Text {...labelProps}>{label}</Text>
    </Button>
  );
}
