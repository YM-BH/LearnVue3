<template>
  <div class="home-date">
    <div class="enter" @click="enterClick">
      <span class="enter-content">入住</span>
      <div class="enter-date">{{ formatDate(enterDate) }}</div>
    </div>
    <div class="total">共{{ total }}晚</div>
    <div class="leave" @click="leaveClick">
      <span class="leave-content">离开</span>
      <div class="leave-date">{{ formatDate(leaveDate) }}</div>
    </div>
    <van-calendar v-model:show="isShow" @confirm="onConfirm" type="range"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { formatDate } from '@/utils/date-format'
import dayjs from 'dayjs'

// 是否展示日历
const isShow = ref(false)

// 获取入住时间
const enterDate = ref(new Date())

const leaveDate = ref(dayjs().add(1, 'day'))

const total = ref(1)

function enterClick() {
  isShow.value = true
}

function leaveClick() {
  isShow.value = true
}

function onConfirm(dates) {
  isShow.value = false
  enterDate.value = dates[0]
  leaveDate.value = dates[1]

  // 计算相差的天数
  total.value = dayjs(leaveDate.value).diff(enterDate.value, 'day')
}

</script>

<style lang="less" scoped>
  .home-date {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    .enter {
      width: 30%;
      .enter-content {
        color: gray;
      }
    }
    .total {
      flex: 1;
    }
    .leave {
      width: 30%;
      .leave-content {
        color: gray;
      }
    }
  }
</style>