import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

export default function DeletableAvatarChip() {
  return <Chip avatar={<Avatar>M</Avatar>} label="SvgIcon Chip" onDelete={() => {}} />;
}
