import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MenuSection = {
  title: String;
  data: MemuItem[];
}
type MemuItem = {
  label: String;
  onPress: () => void;
}

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.titleContainer}>
        <Text style={styles.subText}>welcome!</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>OH NAMI</Text>
      </View>
      <View style={styles.splitContainer} />
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item) => item.label}
        renderSectionHeader={({ section }) => (
          <Text style={{ color: '#BFD7EA', paddingHorizontal: 20, marginVertical : 4, fontWeight : '500', fontSize: 14 }}>
            {section.title}
          </Text>
        )}

        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableOpacity
              onPress={item.onPress}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical : 12,
                borderBottomWidth: 1,
                borderBottomColor: '#F0F0F0',
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
              <IconSymbol size={14} color={"1A1A2E"} name='chevron.right' />
            </TouchableOpacity>
          </View>

        )}
        renderSectionFooter={() => <View style={styles.splitContainer} />}
      />
    </SafeAreaView>
  );
}

const sections: MenuSection[] = [
  {
    title: 'My account',
    data: [
      { label: 'Login ID', onPress: () => { } },
      { label: 'Logout', onPress: () => { } },
      { label: 'Membership Widthdrawal', onPress: () => { } }
    ]
  },
  {
    title: 'Customer Center',
    data: [
      { label: 'FAQ', onPress: () => { } },
      { label: 'Inquiry', onPress: () => { } },
    ]
  },
  {
    title: 'My Activity',
    data: [
      { label: 'Card Registrations', onPress: () => { } },
      { label: 'Transactions', onPress: () => { } },
    ]
  },
  {
    title: 'App info',
    data: [
      { label: 'App Informataion', onPress: () => { } },
      { label: 'Transactions', onPress: () => { } },
    ]
  }
]

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    gap: 6,
    backgroundColor: '#1A1A2E'
  },
  splitContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#ECF0F4',
    marginBottom: 20
  },
  mainText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A2E'
  },
  subText: {
    fontSize: 16,
    color: '#BFD7EA'
  }
});
