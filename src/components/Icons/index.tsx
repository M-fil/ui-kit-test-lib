import React, { HTMLProps, FC } from 'react'

import { ReactComponent as CheckIconComponent } from '../../core/assets/icons/check.svg'
import { ReactComponent as QuestionMarkIconComponent } from '../../core/assets/icons/question-mark.svg'
import { ReactComponent as UserIconComponent } from '../../core/assets/icons/user.svg'

export type IconProps = Partial<HTMLProps<SVGElement>>

const DEFAULT_SIZE = 25

const createIcon = (Icon: FC<IconProps>): FC<IconProps> => (props: IconProps) => (
  <Icon width={DEFAULT_SIZE} height={DEFAULT_SIZE} {...props} />
)

export const CheckIcon = createIcon(CheckIconComponent)
export const QuestionMarkIcon = createIcon(QuestionMarkIconComponent)
export const UserIcon = createIcon(UserIconComponent)
