import { ImageBackground, View, Text } from 'react-native';
import {styles} from "./styles";
import { Flight } from '@/components/Flight';
import {Ionicons} from "@expo/vector-icons"
import { colors } from '@/styles/colors';
import { Info } from '@/components/Info';
import QRCode from "react-native-qrcode-svg";
import Svg, {Line, Circle} from "react-native-svg";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.header} source={require("@/assets/cover.jpg")}>
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subTitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
            <View style={styles.flight}>
                <Flight label='São Paulo' value='GRU' />
                <View style={styles.duration}>
                    <Ionicons name='airplane-sharp' size={32} color={colors.black} />
                    <Text style={styles.hours}>9 h 45 min</Text>
                </View>
                <Flight label='Nova York' value='JFK' />
            </View>

            <Text style={styles.label}>Passageiro</Text>
            <Text style={styles.name}>Felipe Alves Amodio</Text>

            <View style={styles.details}>
                <View style={styles.inline}>
                <Info label='Data' value='17 de Nov.' />
                <Info label='Embarque' value='17:25' />
                </View>
            </View>
        </View>

        <View>
            <Svg height={20} width="100%">
                <Line 
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke={colors.gray[400]}
                    //deixar a linha tracejada
                    strokeWidth={1}
                    strokeDasharray="5,5"
                />
                <Circle 
                    r={8}
                    cx="0%"
                    cy="50%"
                    fill={colors.black}
                />
                
                <Circle 
                    r={8}
                    cx="100%"
                    cy="50%"
                    fill={colors.black}
                />
            </Svg>
        </View>

        <View style={styles.footer}>
            <View style={styles.footerContent}>
                <View style={styles.inline}>
                    <Info label='Voo' value='YZ 807' />
                    <Info label='Assento' value='29G' />
                </View>

                <View style={styles.inline}>
                    <Info label='Terminal' value='3' />
                    <Info label='Portão' value='19' />
                </View>
            </View>

            <QRCode value='boarding code' size={130} />

        </View>
      </View>
    </View>
  );
}

