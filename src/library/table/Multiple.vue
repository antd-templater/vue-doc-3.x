<template>
  <div style="width: 100%; overflow: auto">
    <STable
      v-model:columns="columns"
      v-model:sources="sources"
      :columnPresetSettings="true"
      :scroll="scroll"
      :sticky="sticky"
    />
  </div>
</template>

<script setup lang="ts">
const scroll = tableScrollDefiner({
  x: 'max-content',
  overflow: 'visible',
})

const sticky = tableStickyDefiner({
  topHeader: true,
})

const columns = tableColumnsDefiner([
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: 'left',
    width: 100,
    settings: {
      disabled: true, // 禁止隐藏该列
    },
  },
  {
    title: 'Other',
    dataIndex: 'other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        width: 200,
        settings: {
          checkbox: false, // 隐藏该列
        },
      },
      {
        title: 'Address',
        dataIndex: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            width: 200,
          },
          {
            title: 'Block',
            dataIndex: 'block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                width: 100,
              },
            ],
            settings: {
              checkbox: false, // 隐藏该列及其子列
            },
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    dataIndex: 'company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    fixed: 'right',
    align: 'center',
    width: 80,
  },
])

const sources = tableSourcesDefiner([
  { name: 'Alice', age: 32, street: 'BeiLun', building: 'C1', number: '2019', companyAddress: 'Address-2019', companyName: 'Name-2019', gender: 'F' },
  { name: 'Mary', age: 22, street: 'BaiFeng', building: 'C3', number: '1913', companyAddress: 'Address-1913', companyName: 'Name-1913', gender: 'F' },
  { name: 'Jack', age: 27, street: 'HaiShu', building: 'B9', number: '0907', companyAddress: 'Address-0907', companyName: 'Name-0907', gender: 'M' },
  { name: 'Astrid', age: 18, street: 'JiangBei', building: 'C1', number: '1101', companyAddress: 'Address-1101', companyName: 'Name-1101', gender: 'F' },
  { name: 'Zora', age: 21, street: 'YinZhou', building: 'A1', number: '1519', companyAddress: 'Address-1519', companyName: 'Name-1519', gender: 'F' },
])
</script>
