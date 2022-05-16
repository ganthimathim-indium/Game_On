/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
function generateReport(data) {
  const JsonStringData = [
    {
      Summary: 'user_name',
      '-': '',
      Stats: data.user_name,
    },
    {
      Summary: 'Account',
      '-': '',
      Stats: data.email,

      '': '',
      ' ': ' ',
      CPU: '',
      cpu_usage_time: data.cpu_usage_time[0],
      cpu_app_usage: data.cpu_app_usage[0],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[0],
      gpu_usage_time: data.gpu_usage_time[0],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[0],
      memory_usage_time: data.memory_usage_time[0],
      POWER: '',
      avg_power_usage: data.avg_power_usage[0],
      power_usage_time: data.power_usage_time[0],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[0],
      upload_data_usage_time: data.upload_data_usage_time[0],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[0],
      download_data_usage_time: data.download_data_usage_time[0],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[0],
      cpucores_app_usage_time: data.cpucores_app_usage_time[0],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[0],
      average_fps_app_usage_time: data.average_fps_app_usage_time[0],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[0],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[0],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[0],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[0],

    },
    {
      Summary: 'Test Date',
      '-': '',
      Stats: data.created_at,
      '': '',
      ' ': ' ',
      CPU: '',
      cpu_usage_time: data.cpu_usage_time[1],
      cpu_app_usage: data.cpu_app_usage[1],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[1],
      gpu_usage_time: data.gpu_usage_time[1],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[1],
      memory_usage_time: data.memory_usage_time[1],
      POWER: '',
      avg_power_usage: data.avg_power_usage[1],
      power_usage_time: data.power_usage_time[1],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[1],
      upload_data_usage_time: data.upload_data_usage_time[1],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[1],
      download_data_usage_time: data.download_data_usage_time[1],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[1],
      cpucores_app_usage_time: data.cpucores_app_usage_time[1],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[1],
      apppower_app_usage_time: data.apppower_app_usage_time[1],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[1],
      average_fps_app_usage_time: data.average_fps_app_usage_time[1],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[1],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[1],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[1],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[1],

    },
    {
      Summary: 'session_name',
      '-': '',
      Stats: data.session_title,

      '': '',
      ' ': ' ',
      CPU: '',
      cpu_usage_time: data.cpu_usage_time[2],
      cpu_app_usage: data.cpu_app_usage[2],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[2],
      gpu_usage_time: data.gpu_usage_time[2],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[2],
      memory_usage_time: data.memory_usage_time[2],
      POWER: '',
      avg_power_usage: data.avg_power_usage[2],
      power_usage_time: data.power_usage_time[2],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[2],
      upload_data_usage_time: data.upload_data_usage_time[2],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[2],
      download_data_usage_time: data.download_data_usage_time[2],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[2],
      cpucores_app_usage_time: data.cpucores_app_usage_time[2],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[2],
      apppower_app_usage_time: data.apppower_app_usage_time[2],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[2],
      average_fps_app_usage_time: data.average_fps_app_usage_time[2],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[2],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[2],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[2],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[2],

    },
    {
      Summary: 'session_id',
      '-': '',
      Stats: data.session_id,

      '': '',
      ' ': ' ',
      CPU: '',
      cpu_usage_time: data.cpu_usage_time[3],
      cpu_app_usage: data.cpu_app_usage[3],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[3],
      gpu_usage_time: data.gpu_usage_time[3],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[3],
      memory_usage_time: data.memory_usage_time[3],
      POWER: '',
      avg_power_usage: data.avg_power_usage[3],
      power_usage_time: data.power_usage_time[3],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[3],
      upload_data_usage_time: data.upload_data_usage_time[3],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[3],
      download_data_usage_time: data.download_data_usage_time[3],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[3],
      cpucores_app_usage_time: data.cpucores_app_usage_time[3],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[3],
      apppower_app_usage_time: data.apppower_app_usage_time[3],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[3],
      average_fps_app_usage_time: data.average_fps_app_usage_time[3],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[3],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[3],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[3],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[3],

    },
    {

      Summary: 'device_name',
      '-': '',
      Stats: data.device_name,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[4],
      cpu_app_usage: data.cpu_app_usage[4],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[4],
      gpu_usage_time: data.gpu_usage_time[4],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[4],
      memory_usage_time: data.memory_usage_time[4],
      POWER: '',
      avg_power_usage: data.avg_power_usage[4],
      power_usage_time: data.power_usage_time[4],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[4],
      upload_data_usage_time: data.upload_data_usage_time[4],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[4],
      download_data_usage_time: data.download_data_usage_time[4],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[4],
      cpucores_app_usage_time: data.cpucores_app_usage_time[4],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[4],
      apppower_app_usage_time: data.apppower_app_usage_time[4],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[4],
      average_fps_app_usage_time: data.average_fps_app_usage_time[4],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[4],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[4],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[4],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[4],

    },
    {
      Summary: 'app_name',
      '-': '',
      Stats: data.app_name,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[5],
      cpu_app_usage: data.cpu_app_usage[5],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[5],
      gpu_usage_time: data.gpu_usage_time[5],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[5],
      memory_usage_time: data.memory_usage_time[5],
      POWER: '',
      avg_power_usage: data.avg_power_usage[5],
      power_usage_time: data.power_usage_time[5],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[5],
      upload_data_usage_time: data.upload_data_usage_time[5],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[5],
      download_data_usage_time: data.download_data_usage_time[5],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[5],
      cpucores_app_usage_time: data.cpucores_app_usage_time[5],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[5],
      apppower_app_usage_time: data.apppower_app_usage_time[5],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[5],
      average_fps_app_usage_time: data.average_fps_app_usage_time[5],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[5],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[5],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[5],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[5],

    },
    {
      Summary: 'OS version',
      '-': '',
      Stats: data.version_name,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[6],
      cpu_app_usage: data.cpu_app_usage[6],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[6],
      gpu_usage_time: data.gpu_usage_time[6],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[6],
      memory_usage_time: data.memory_usage_time[6],
      POWER: '',
      avg_power_usage: data.avg_power_usage[6],
      power_usage_time: data.power_usage_time[6],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[6],
      upload_data_usage_time: data.upload_data_usage_time[6],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[6],
      download_data_usage_time: data.download_data_usage_time[6],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[6],
      cpucores_app_usage_time: data.cpucores_app_usage_time[6],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[6],
      apppower_app_usage_time: data.apppower_app_usage_time[6],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[6],
      average_fps_app_usage_time: data.average_fps_app_usage_time[6],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[6],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[6],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[6],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[6],

    },
    {
      Summary: 'total_duration',
      '-': '',
      Stats: data.total_duration,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[7],
      cpu_app_usage: data.cpu_app_usage[7],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[7],
      gpu_usage_time: data.gpu_usage_time[7],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[7],
      memory_usage_time: data.memory_usage_time[7],
      POWER: '',
      avg_power_usage: data.avg_power_usage[7],
      power_usage_time: data.power_usage_time[7],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[7],
      upload_data_usage_time: data.upload_data_usage_time[7],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[7],
      download_data_usage_time: data.download_data_usage_time[7],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[7],
      cpucores_app_usage_time: data.cpucores_app_usage_time[7],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[7],
      apppower_app_usage_time: data.apppower_app_usage_time[7],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[7],
      average_fps_app_usage_time: data.average_fps_app_usage_time[7],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[7],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[7],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[7],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[7],

    },
    {
      Summary: 'device_id',
      '-': '',
      Stats: data.device_id,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[8],
      cpu_app_usage: data.cpu_app_usage[8],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[8],
      gpu_usage_time: data.gpu_usage_time[8],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[8],
      memory_usage_time: data.memory_usage_time[8],
      POWER: '',
      avg_power_usage: data.avg_power_usage[8],
      power_usage_time: data.power_usage_time[8],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[8],
      upload_data_usage_time: data.upload_data_usage_time[8],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[8],
      download_data_usage_time: data.download_data_usage_time[8],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[8],
      cpucores_app_usage_time: data.cpucores_app_usage_time[8],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[8],
      apppower_app_usage_time: data.apppower_app_usage_time[8],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[8],
      average_fps_app_usage_time: data.average_fps_app_usage_time[8],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[8],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[8],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[8],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[8],

    },
    {
      Summary: 'cpu_average_usage',
      '-': '',
      Stats: data.cpu_average_usage,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[9],
      cpu_app_usage: data.cpu_app_usage[9],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[9],
      gpu_usage_time: data.gpu_usage_time[9],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[9],
      memory_usage_time: data.memory_usage_time[9],
      POWER: '',
      avg_power_usage: data.avg_power_usage[9],
      power_usage_time: data.power_usage_time[9],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[9],
      upload_data_usage_time: data.upload_data_usage_time[9],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[9],
      download_data_usage_time: data.download_data_usage_time[9],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[9],
      cpucores_app_usage_time: data.cpucores_app_usage_time[9],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[9],
      apppower_app_usage_time: data.apppower_app_usage_time[9],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[9],
      average_fps_app_usage_time: data.average_fps_app_usage_time[9],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[9],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[9],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[9],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[9],

    },
    {
      Summary: 'gpu_average_usage',
      '-': '',
      Stats: data.gpu_average_usage,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[10],
      cpu_app_usage: data.cpu_app_usage[10],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[10],
      gpu_usage_time: data.gpu_usage_time[10],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[10],
      memory_usage_time: data.memory_usage_time[10],
      POWER: '',
      avg_power_usage: data.avg_power_usage[10],
      power_usage_time: data.power_usage_time[10],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[10],
      upload_data_usage_time: data.upload_data_usage_time[10],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[10],
      download_data_usage_time: data.download_data_usage_time[10],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[10],
      cpucores_app_usage_time: data.cpucores_app_usage_time[10],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[10],
      apppower_app_usage_time: data.apppower_app_usage_time[10],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[10],
      average_fps_app_usage_time: data.average_fps_app_usage_time[10],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[10],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[10],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[10],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[10],

    },
    {
      Summary: 'memory_average_usage',
      '-': '',
      Stats: data.memory_average_usage,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[11],
      cpu_app_usage: data.cpu_app_usage[11],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[11],
      gpu_usage_time: data.gpu_usage_time[11],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[11],
      memory_usage_time: data.memory_usage_time[11],
      POWER: '',
      avg_power_usage: data.avg_power_usage[11],
      power_usage_time: data.power_usage_time[11],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[11],
      upload_data_usage_time: data.upload_data_usage_time[11],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[11],
      download_data_usage_time: data.download_data_usage_time[11],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[11],
      cpucores_app_usage_time: data.cpucores_app_usage_time[11],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[11],
      apppower_app_usage_time: data.apppower_app_usage_time[11],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[11],
      average_fps_app_usage_time: data.average_fps_app_usage_time[11],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[11],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[11],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[11],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[11],

    },
    {
      Summary: 'power_average_usage',
      '-': '',
      Stats: data.power_average_usage,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[12],
      cpu_app_usage: data.cpu_app_usage[12],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[12],
      gpu_usage_time: data.gpu_usage_time[12],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[12],
      memory_usage_time: data.memory_usage_time[12],
      POWER: '',
      avg_power_usage: data.avg_power_usage[12],
      power_usage_time: data.power_usage_time[12],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[12],
      upload_data_usage_time: data.upload_data_usage_time[12],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[12],
      download_data_usage_time: data.download_data_usage_time[12],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[12],
      cpucores_app_usage_time: data.cpucores_app_usage_time[12],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[12],
      apppower_app_usage_time: data.apppower_app_usage_time[12],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[12],
      average_fps_app_usage_time: data.average_fps_app_usage_time[12],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[12],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[12],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[12],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[12],

    },
    {
      Summary: 'download_data_usage_average',
      '-': '',
      Stats: data.download_data_usage_average,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[13],
      cpu_app_usage: data.cpu_app_usage[13],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[13],
      gpu_usage_time: data.gpu_usage_time[13],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[13],
      memory_usage_time: data.memory_usage_time[13],
      POWER: '',
      avg_power_usage: data.avg_power_usage[13],
      power_usage_time: data.power_usage_time[13],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[13],
      upload_data_usage_time: data.upload_data_usage_time[13],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[13],
      download_data_usage_time: data.download_data_usage_time[13],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[13],
      cpucores_app_usage_time: data.cpucores_app_usage_time[13],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[13],
      apppower_app_usage_time: data.apppower_app_usage_time[13],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[13],
      average_fps_app_usage_time: data.average_fps_app_usage_time[13],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[13],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[13],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[13],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[13],

    },
    {
      Summary: 'upload_data_usage_average',
      '-': '',
      Stats: data.upload_data_usage_average,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[14],
      cpu_app_usage: data.cpu_app_usage[14],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[14],
      gpu_usage_time: data.gpu_usage_time[14],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[14],
      memory_usage_time: data.memory_usage_time[14],
      POWER: '',
      avg_power_usage: data.avg_power_usage[14],
      power_usage_time: data.power_usage_time[14],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[14],
      upload_data_usage_time: data.upload_data_usage_time[14],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[14],
      download_data_usage_time: data.download_data_usage_time[14],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[14],
      cpucores_app_usage_time: data.cpucores_app_usage_time[14],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[14],
      apppower_app_usage_time: data.apppower_app_usage_time[14],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[14],
      average_fps_app_usage_time: data.average_fps_app_usage_time[14],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[14],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[14],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[14],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[14],

    },
    {
      Summary: 'app_power_usage_average',
      '-': '',
      Stats: data.app_power_usage_average,

      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[15],
      cpu_app_usage: data.cpu_app_usage[15],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[15],
      gpu_usage_time: data.gpu_usage_time[15],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[15],
      memory_usage_time: data.memory_usage_time[15],
      POWER: '',
      avg_power_usage: data.avg_power_usage[15],
      power_usage_time: data.power_usage_time[15],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[15],
      upload_data_usage_time: data.upload_data_usage_time[15],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[15],
      download_data_usage_time: data.download_data_usage_time[15],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[15],
      cpucores_app_usage_time: data.cpucores_app_usage_time[15],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[15],
      apppower_app_usage_time: data.apppower_app_usage_time[15],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[15],
      average_fps_app_usage_time: data.average_fps_app_usage_time[15],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[15],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[15],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[15],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[15],

    },
    {
      Summary: 'average_fps_value',
      '-': '',
      Stats: data.average_fps_value,
      '': '',
      ' ': ' ',
      CPU: ' ',
      cpu_usage_time: data.cpu_usage_time[16],
      cpu_app_usage: data.cpu_app_usage[16],
      GPU: '',
      avg_gpu_usage: data.avg_gpu_usage[16],
      gpu_usage_time: data.gpu_usage_time[16],
      MEMORY: '',
      avg_memory_usage: data.avg_memory_usage[16],
      memory_usage_time: data.memory_usage_time[16],
      POWER: '',
      avg_power_usage: data.avg_power_usage[16],
      power_usage_time: data.power_usage_time[16],
      UPLOADED_DATA: '',
      uploaddata_app_usage: data.uploaddata_app_usage[16],
      upload_data_usage_time: data.upload_data_usage_time[16],
      DOWNLOAD_DATA: '',
      downloadddata_app_uage: data.downloadddata_app_uage[16],
      download_data_usage_time: data.download_data_usage_time[16],
      CPU_CORES: '',
      cpucores_app_usage: data.cpucores_app_usage[16],
      cpucores_app_usage_time: data.cpucores_app_usage_time[16],
      APP_POWER: '',
      apppower_app_useage: data.apppower_app_useage[16],
      apppower_app_usage_time: data.apppower_app_usage_time[16],
      FPS: '',
      averagefps_app_usage: data.averagefps_app_usage[16],
      average_fps_app_usage_time: data.average_fps_app_usage_time[16],
      FPS_STABILITY: '',
      average_fps_stability_value: data.average_fps_stability_value[16],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[16],
      PEAK_MEMORY: '',
      average_peakmemory_app_usage: data.average_peakmemory_app_usage[16],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[16],

    },

    // {

    //   Summary: 'Test Date',
    //   '-': '',
    //   Stats: data.created_at,
    //   '': '',
    //   ' ': ' ',
    //   CPU: ' ',
    //   cpu_usage_time: data.cpu_usage_time[18],
    //   cpu_app_usage: data.cpu_app_usage[18],
    //   GPU: '',
    //   avg_gpu_usage: data.avg_gpu_usage[18],
    //   gpu_usage_time: data.gpu_usage_time[18],
    //   MEMORY: '',
    //   avg_memory_usage: data.avg_memory_usage[18],
    //   memory_usage_time: data.memory_usage_time[18],
    //   POWER: '',
    //   avg_power_usage: data.avg_power_usage[18],
    //   power_usage_time: data.power_usage_time[18],
    //   UPLOADED_DATA: '',
    //   uploaddata_app_usage: data.uploaddata_app_usage[18],
    //   upload_data_usage_time: data.upload_data_usage_time[18],
    //   DOWNLOAD_DATA: '',
    //   downloadddata_app_uage: data.downloadddata_app_uage[18],
    //   download_data_usage_time: data.download_data_usage_time[18],
    //   CPU_CORES: '',
    //   cpucores_app_usage: data.cpucores_app_usage[18],
    //   cpucores_app_usage_time: data.cpucores_app_usage_time[18],
    //   APP_POWER: '',
    //   apppower_app_useage: data.apppower_app_useage[18],
    //   apppower_app_usage_time: data.apppower_app_usage_time[18],
    //   FPS: '',
    //   averagefps_app_usage: data.averagefps_app_usage[18],
    //   average_fps_app_usage_time: data.average_fps_app_usage_time[18],
    // },

  ];

  for (let i = 16; i < data.cpu_app_usage.length; i++) {
    JsonStringData.push({
      cpu_app_usage: data.cpu_app_usage[i + 1],
      cpu_usage_time: data.cpu_usage_time[i + 1],

      avg_gpu_usage: data.avg_gpu_usage[i + 1],
      gpu_usage_time: data.gpu_usage_time[i + 1],

      avg_memory_usage: data.avg_memory_usage[i + 1],
      memory_usage_time: data.memory_usage_time[i + 1],

      avg_power_usage: data.avg_power_usage[i + 1],
      power_usage_time: data.power_usage_time[i + 1],

      uploaddata_app_usage: data.uploaddata_app_usage[i + 1],
      upload_data_usage_time: data.upload_data_usage_time[i + 1],

      downloadddata_app_uage: data.downloadddata_app_uage[i + 1],
      download_data_usage_time: data.download_data_usage_time[i + 1],

      cpucores_app_usage: data.cpucores_app_usage[i + 1],
      cpucores_app_usage_time: data.cpucores_app_usage_time[i + 1],

      apppower_app_useage: data.apppower_app_useage[i + 1],
      apppower_app_usage_time: data.apppower_app_usage_time[i + 1],

      averagefps_app_usage: data.averagefps_app_usage[i + 1],
      average_fps_app_usage_time: data.average_fps_app_usage_time[i + 1],

      average_fps_stability_value: data.average_fps_stability_value[i + 1],
      average_fps_stability_recorded_time: data.average_fps_stability_recorded_time[i + 1],

      average_peakmemory_app_usage: data.average_peakmemory_app_usage[i + 1],
      average_peakmemory_app_recorded_time: data.average_peakmemory_app_recorded_time[i + 1],

    });
  }

  return JsonStringData;
}
export default generateReport;