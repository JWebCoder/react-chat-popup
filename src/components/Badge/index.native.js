// @flow

import * as React from 'react'
import { Text } from 'react-native'

import styles from './style'

import type { Props } from './props'

const Badge = ({ badge }: Props) =>
  badge > 0 &&
    <Text style={styles.badge}>{badge}</Text>

export default Badge
