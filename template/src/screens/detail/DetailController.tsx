import React, {useEffect, useState} from "react";
import {FlatList, Linking, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {getRss} from "services/API";
import {Model} from "model.ts";
import {appStyles} from "commons/styles";
import {detailStyles} from "screens/detail/styles";

const DetailScreenController = ({route, navigation}: any) => {

    const [rssList, setRssList] = useState()
    const [loadingState, setLoadingState] = useState(false)
    const param: RssAggregators = route.params

    // console.log(param)
    navigation.setOptions({
        headerTitle: (<Text>{param.title} ({rssList?.length ?? 0})</Text>)
    })

    //TODO Switch Sort state
    const switchSort = () => {

    }


    useEffect(() => {
        fetchRssList()
    }, [])

    const fetchRssList = () => {
        setLoadingState(true)
        getRss(param.url).then((res) => {
            console.log(JSON.stringify(res))

            let result = JSON.parse(JSON.stringify(res)).sort((a: Model, b: Model) => (new Date(a.pubDate) > (new Date(b.pubDate)) ? -1 : 0))

            setRssList(result)
            setLoadingState(false)
        })

        // navigation.navigate('Detail')
    }

    function showFeedDetails(link: string) {
        Linking.openURL(link)
    }

    return (
        <SafeAreaView style={appStyles.safeArea}>
            <Text style={[detailStyles.cardText, detailStyles.title]}>Hello Details screen</Text>
        </SafeAreaView>
    )
};
export default DetailScreenController
