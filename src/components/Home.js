import React, { Component } from 'react';
import {
    View, Text, FlatList, Image, ScrollView, ActivityIndicator, TouchableOpacity, Animated
} from 'react-native';
import { otherApi, } from '../actions';
import { connect } from 'react-redux';
import styles, {
    bluesky_color,
    hp, wp,
} from './Assets/style/styles';


class Home extends Component {




    constructor(props) {
        super(props);
        this.state = {
            active_card: 0,
            flatliist_inialvalue: new Animated.Value(0)
        };
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        this.setState({
            active_card: viewableItems[0].index ? viewableItems[0].index : 0
        })
    }

    async componentDidMount() {
        this.get_data()
        this._start_flatlist_animated()

    };

    _start_flatlist_animated() {
        const { flatliist_inialvalue } = this.state
        Animated.spring(flatliist_inialvalue, {
            toValue: 1,
            friction: 12,
            tension: 1,
            useNativeDriver: true,
        }).start()
    }


    get_data = async () => {
        const { otherApi } = this.props;
        await otherApi('GET', 'characters', '', '', 'characters');

    };

    _render_head_panner = ({ item, index }) => {
        const { active_card } = this.state;
        const { loading, navigation } = this.props
        let scale = active_card == index ? 1 : .8
        let opacity = active_card == index ? 1 : .5

        if (loading) {
            return (
                <View style={styles.loading_headpanner} />
            )
        }
        return (
            <TouchableOpacity
                activeOpacity={.9}
                onPress={() =>
                    navigation.navigate('Details', { item: item })}
            >
                <View style={{
                    ...styles.head_p_view,
                    transform: [{ scale: scale }],
                    opacity: opacity,
                }}>
                    <Image
                        style={styles.head_p_thumb}
                        source={{ uri: item.imageUrl }} />
                </View>
            </TouchableOpacity>
        )
    }
    _render_all_characters = ({ item, index }) => {
        const { loading, navigation } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={.9}
                onPress={() =>
                    navigation.navigate('Details', { item: item })}
            >
                <View style={styles.all_ch_view}>
                    {loading ?
                        <View style={styles.indicator_view} >
                            <ActivityIndicator size="large" color={bluesky_color} />
                        </View> : <Image
                            style={styles.all_ch_thub}
                            source={{ uri: item.imageUrl }} />}
                    <Text style={styles.all_ch_text}
                    >{item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        const { active_card, flatliist_inialvalue } = this.state
        const { all_caracters } = this.props
        const pannerData = all_caracters.slice(1, 6)
        return (
            <View style={styles.home_mainview}>
                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={styles.head_view_text}>
                        <View style={styles.labels_view}>
                            <Text style={styles.text_forlabels}>Best Charachters</Text>
                        </View>
                    </View>
                    <FlatList
                        onViewableItemsChanged={this.onViewableItemsChanged}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50,
                        }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        style={styles.fl_head_panner}
                        data={pannerData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._render_head_panner} />

                    <View style={styles.counts_view}>
                        <Text
                            style={styles.counter_text}
                        >{active_card + 1}/{pannerData.length}
                        </Text>

                    </View>
                    <View style={styles.sec_view}>

                        <View style={styles.head_view_text}>
                            <View style={styles.labels_view}>
                                <Text style={styles.text_forlabels}>Best Charachters</Text>
                            </View>
                        </View>
                        <Animated.FlatList
                            horizontal
                            ItemSeparatorComponent={() => <View style={{ width: wp(4) }} />}
                            scrollEventThrottle={16}
                            key={'##'}
                            style={{
                                ...styles.fl_characters,
                                transform: [{
                                    rotateX: flatliist_inialvalue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["90deg", "0deg"]
                                    })
                                }]
                            }}
                            showsHorizontalScrollIndicator={false}
                            data={all_caracters}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this._render_all_characters}
                        />
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({ other }) => {
    const { loading, all_caracters } = other;

    return {
        loading,
        all_caracters
    };
};
export default connect(mapStateToProps, { otherApi })(Home);
