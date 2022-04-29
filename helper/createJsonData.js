function generateReport(data) {
  const JsonStringData = [{
    session_id: data.session_id,
    device_id: data.device_id,
    device_name: data.device_name,
    app_name: data.app_name,
    version_name: data.version_name,
    total_duration: data.total_duration,
    created_at: data.created_at,
    cpu_average_usage: data.cpu_average_usage,
    gpu_average_usage: data.gpu_average_usage,
    memory_average_usage: data.memory_average_usage,
    power_average_usage: data.power_average_usage,
    download_data_usage_average: data.download_data_usage_average,
    upload_data_usage_average: data.upload_data_usage_average,
    cpu_cores_usage_average: data.cpu_cores_usage_average,
    app_power_usage_average: data.app_power_usage_average,
    average_fps_value: data.average_fps_value,
    user_name: data.user_name,
    email: data.email,

    cpu_app_usage: data.cpu_app_usage.toString(),
    cpu_usage_time: data.cpu_usage_time.toString(),
    cpu_deviation: data.cpu_deviation.toString(),

    avg_gpu_usage: data.avg_gpu_usage.toString(),
    gpu_usage_time: data.gpu_usage_time.toString(),
    gpu_deviation: data.gpu_deviation.toString(),

    avg_memory_usage: data.avg_memory_usage.toString(),
    memory_usage_time: data.memory_usage_time.toString(),
    memory_deviation: data.memory_deviation.toString(),

    avg_power_usage: data.avg_power_usage.toString(),
    power_usage_time: data.power_usage_time.toString(),
    power_deviation: data.power_deviation.toString(),

    uploaddata_app_usage: data.uploaddata_app_usage.toString(),
    upload_data_usage_time: data.upload_data_usage_time.toString(),
    upload_data_app_deviation: data.upload_data_app_deviation.toString(),

    downloadddata_app_uage: data.downloadddata_app_uage.toString(),
    download_data_usage_time: data.download_data_usage_time.toString(),
    download_data_app_deviation: data.download_data_app_deviation.toString(),

    cpucores_app_usage: data.cpucores_app_usage.toString(),
    cpucores_app_usage_time: data.cpucores_app_usage_time.toString(),
    cpu_cores_app_deviation: data.cpu_cores_app_deviation.toString(),

    apppower_app_useage: data.apppower_app_useage.toString(),
    apppower_app_usage_time: data.apppower_app_usage_time.toString(),
    aap_ppower_app_deviation: data.ap_ppower_app_deviation.toString(),

    averagefps_app_usage: data.averagefps_app_usage.toString(),
    average_fps_app_usage_time: data.average_fps_app_usage_time.toString(),
    average_fps_app_deviation: data.average_fps_app_deviation.toString(),
  }];
  return JsonStringData;
}
export default generateReport;
