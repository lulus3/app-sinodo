import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, Button } from "react-native";

export default function() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            {data && (
                <View style={{ marginTop: 20, padding: 10 }}>
                    <Text>More</Text>
                </View>
            )}
        </View>
    );
}
