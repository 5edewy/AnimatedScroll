'use strict';
import { StyleSheet } from 'react-native';

import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;




/// colors
export const Primary_color = "#26282e"
export const gray_text_color = "#d9d9d9"
export const bg_hover_color = "#3b3f45"
export const bluesky_color = "#62adcb"
export const white_color = "#fff"




const styles = StyleSheet.create({
    head_view_text: {
        width: wp(94), alignSelf: 'center',
        alignItems: 'flex-start', marginVertical: hp(2)
    },
    labels_view: {
        backgroundColor: bg_hover_color,
        borderTopLeftRadius: wp(6),
        borderBottomRightRadius: wp(6),
        alignItems: 'center', justifyContent: 'center',
        paddingHorizontal: wp(3), elevation: 1,
        paddingVertical: hp(1)
    },
    home_mainview: {
        flex: 1, backgroundColor: Primary_color,
        paddingTop: hp(2)
    },
    text_forlabels: {
        fontSize: wp(3.8),
        color: gray_text_color,
        fontWeight: "bold"
    },
    fl_head_panner: {
        width: wp(98),
        alignSelf: "center",
        marginTop: hp(2),
        marginBottom: hp(1)
    },
    counter_text: {
        color: bluesky_color,
        fontSize: wp(3.5),
    },
    sec_view: {
        width: wp(92),
        alignSelf: 'center'
    },
    fl_characters: {
        alignSelf: 'center',
        marginTop: hp(2)
    },
    all_ch_view: {
        paddingBottom: hp(1),
        backgroundColor: bg_hover_color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(2),
        elevation: 4
    },
    all_ch_thub: {
        width: wp(40), height: hp(20),
        resizeMode: 'stretch', alignSelf: 'center'
    },
    all_ch_text: {
        color: gray_text_color,
        fontSize: wp(3.8),
        marginVertical: hp(.7)
    },
    head_p_view: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        marginHorizontal: wp(-1)
    },
    head_p_thumb: {
        width: wp(80), height: hp(35), borderRadius: wp(3),
        resizeMode: 'cover', alignSelf: 'center'
    },
    loading_headpanner: {
        width: wp(55),
        height: hp(4),
        backgroundColor: bg_hover_color,
        marginHorizontal: wp(2),
        borderRadius: wp(4),
        marginVertical: hp(5)
    },
    indicator_view: {
        width: wp(40), height: hp(20),
        alignItems: 'center', justifyContent: 'center'
    },
    smallreg_text: {
        fontSize: wp(3.6),
        color: bluesky_color
    },
    medtext: {
        color: white_color,
        fontSize: wp(3.8),
        fontWeight: '700'
    },
    counts_view: {
        flexDirection: 'row', paddingHorizontal: wp(2),
        marginVertical: hp(1)
    },
    // Details Screen

    view_forDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: hp(1),
        backgroundColor: bg_hover_color,
        borderRadius: wp(2),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(2)
    },
    decliration_text: {
        fontSize: wp(3.7),
        color: bluesky_color,
        textDecorationLine: "line-through"
    },
    disc_view: {
        width: wp(80),
        alignSelf: 'center', justifyContent: 'center',
        marginTop: hp(1),
        paddingBottom: hp(1)
    },
    arrow_view: {
        width: wp(8), height: wp(8), backgroundColor: Primary_color,
        alignItems: 'center', justifyContent: 'center', borderRadius: wp(1)

    },
    tit_view: {
        width: wp(90), alignSelf: 'center', marginTop: hp(2)
    },
    title_text: {
        color: "#fff",
        marginTop: hp(2)
    },
    full_text_view: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: hp(1),
        backgroundColor: bg_hover_color,
        borderRadius: wp(2),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(2)
    },
    headImage: {
        width: wp(100),
        // height: hp(50),
        resizeMode: 'stretch',
        borderBottomRightRadius: wp(10),
        borderBottomLeftRadius: wp(10),
    },
    back_boc: {
        width: wp(12),
        alignItems: 'center',
        justifyContent: "center",
        paddingTop: hp(1)
    },
    back_box_ii: {
        alignItems: "center",
        justifyContent: 'center'
    },

});

export default styles;
