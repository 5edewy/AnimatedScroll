import React, { Component } from 'react';
import {
    View, Text, StatusBar, TouchableOpacity,
    LayoutAnimation, Platform, UIManager, Animated,
} from 'react-native';
import { VectorIcon } from './Assets/common';
import styles, { Primary_color, wp, hp, bg_hover_color, white_color } from './Assets/style/styles';


if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const HEADER_MAX_HEIGHT = hp(50)
const HEADER_MIN_HEIGHT = hp(25)

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.route.params.item,
            show_discribe: false,
            scrollY: new Animated.Value(0),
        };
    }

    render() {
        // STATE :
        const { item, show_discribe } = this.state

        // Icons:
        const open = "keyboard-arrow-down"
        const close = "keyboard-arrow-up"


        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        })

        return (
            <View style={{
                flex: 1,
                backgroundColor: Primary_color
            }}>
                <StatusBar hidden />
                <Animated.Image
                    style={{
                        ...styles.headImage,
                        height: headerHeight,
                    }}
                    source={{ uri: item?.imageUrl }} />
                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY, } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <View style={styles.tit_view}>

                        <Text style={styles.title_text}>{item?.name}</Text>

                        <View style={styles.full_text_view}>
                            <TouchableOpacity
                                activeOpacity={.75}
                                onPress={
                                    () => {
                                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                                        this.setState({
                                            show_discribe: !show_discribe
                                        })
                                    }
                                } >
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                                    width: wp(82), alignSelf: 'center'
                                }}>
                                    <Text style={styles.smallreg_text}>Describtion : </Text>
                                    <Text style={{
                                        fontSize: wp(3.1),
                                        color: white_color
                                    }}>You Can Show Full Caracter Story </Text>
                                    <View style={styles.arrow_view} >
                                        <VectorIcon
                                            name={show_discribe ? close : open}
                                            type="MaterialIcons"
                                            color={white_color}
                                            size={22}
                                        />

                                    </View>

                                </View>
                            </TouchableOpacity>
                            {show_discribe ? <View style={styles.disc_view}>
                                <Text style={{
                                    ...styles.medtext,
                                    lineHeight: hp(3),
                                    textAlign: 'center'
                                }}>{full_dis}</Text>
                            </View> : null}


                        </View>



                        <View style={styles.view_forDetails}>
                            <Text style={styles.smallreg_text}>created at : </Text>
                            <Text style={styles.medtext}>{item.createdAt ? item.createdAt : "Not Define"}</Text>
                        </View>
                        <View style={styles.view_forDetails}>
                            <Text style={styles.smallreg_text}>Updated at : </Text>
                            <Text style={styles.medtext}>{item.updatedAt ? item.updatedAt : "Not Updated Yet"}</Text>
                        </View>

                        <View style={styles.view_forDetails}>
                            <Text style={styles.smallreg_text}>Top Film : </Text>
                            {item.films[0] ? <Text style={styles.medtext}>{item.films[0]}</Text>
                                :
                                <Text style={styles.decliration_text}>{"Not Define"}</Text>}


                        </View>

                        <View style={styles.view_forDetails}>
                            <Text style={styles.smallreg_text}>Top Short Film : </Text>
                            {item.shortFilms[0] ? <Text style={styles.medtext}>{item.shortFilms[0]}</Text>
                                :
                                <Text style={styles.decliration_text}>{"Not Define"}</Text>}
                        </View>

                        <View style={styles.view_forDetails}>
                            <Text style={styles.smallreg_text}>Top Video Game : </Text>
                            {item.videoGames[0] ? <Text style={styles.medtext}>{item.videoGames[0]}</Text>
                                :
                                <Text style={styles.decliration_text}>{"Not Define"}</Text>}
                        </View>
                        <View style={styles.view_forDetails}>
                            <Text style={styles.smallreg_text}>Enemies : </Text>
                            {item.enemies[0] ? <Text style={styles.medtext}>{item.enemies[0]}</Text>
                                :
                                <Text style={styles.decliration_text}>{"No Enemies"}</Text>}
                        </View>



                    </View>
                </Animated.ScrollView>
            </View>
        );
    }
}

export default Details;

const full_dis = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"