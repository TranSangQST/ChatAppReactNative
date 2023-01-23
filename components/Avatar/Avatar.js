import { Image, TouchableOpacity } from "react-native";
import images from "../../assets/images";

function Avatar({ src, size, onPress, rounded }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                style={{
                    width: size || 60,
                    height: size || 60,
                    resizeMode: "contain",
                    borderRadius: rounded && 50,
                }}
                // source={link}
                source={
                    src
                        ? {
                              uri: src,
                          }
                        : images.noAvatar
                }
            ></Image>
        </TouchableOpacity>
    );
}

export default Avatar;
