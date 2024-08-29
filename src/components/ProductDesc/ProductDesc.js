import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + "...";
};

const ProductDesc = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const stripHtmlTags = (htmlString) => {
        return htmlString.replace(/<[^>]*>?/gm, "");
    };

    const fullText = stripHtmlTags(description);
    const truncatedText = truncateText(fullText, 100);

    return (
        <ScrollView className={styles.container}>
            <Text className={styles.header}>Product Description</Text>

            <Text className={styles.text}>
                {isExpanded ? fullText : truncatedText}
                {!isExpanded && (
                    <Text className={styles.seeMore} onPress={handleToggle}>
                        Read more
                    </Text>
                )}
            </Text>

            {isExpanded && (
                <TouchableOpacity onPress={handleToggle}>
                    <Text className={styles.seeMore}>Read less</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
};

export default ProductDesc;
