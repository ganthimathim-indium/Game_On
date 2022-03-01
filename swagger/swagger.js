/**
 * @swagger
 *  components:
 *    schema:
 *      regester:
 *          required:
 *              -name
 *              -email
 *              -phone_number
 *              -password
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto generated id of user
 *              name:
 *                  type: text
 *                  description: name of the user
 *              email:
 *                  type: text
 *                  description: email of the user that acts as a userId for login
 *              password:
 *                  type: text
 *                  description: the password will be encrypted by bCrypt algorithm
 *              phone_number:
 *                  type: text
 *                  description: phonenumber of user
 *          example:
 *                  name: vinay
 *                  email: vinay@gmail.com
 *                  phone_number: 7787874545
 *                  password: 12345pass
 *      login:
 *          required:
 *              -email
 *              -password
 *          properties:
 *              email:
 *                  type: text
 *                  description: email of the user that acts as a userId for login
 *              password:
 *                  type: text
 *                  description: the password will be encrypted by bCrypt algorithm
 *          example:
 *                  email: vinay@gmail.com
 *                  password: 12345pass
 *      reportInfo:
 *          required:
 *              -device_id
 *              -user_id
 *              -token
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto generated id
 *              device_id:
 *                  type: character varying
 *                  description: unique device id
 *              user_id:
 *                  type: character varying
 *                  description: unique user id
 *              device_name:
 *                  type: character varying
 *                  description: name of the device that is being connected
 *              android_version:
 *                  type: character varying
 *                  description: android version of connected device
 *              start_time:
 *                  type: timestamp without time zone
 *                  description: start time of the app run
 *              end_time:
 *                  type: character varying
 *                  description: end time of the app run
 *              version_name:
 *                  type: character varying
 *                  description: version of the app that is being run
 *              app_name:
 *                  type: character varying
 *                  description: name of the app that is being run
 *              record_duration:
 *                  type: character varying
 *                  description: total time of the app run
 *          example:
 *                  device_id: 124212
 *                  user_id: 1214
 *                  device_name: redmi
 *                  android_version: 9
 *                  start_time: 2022-02-17 11:10:57.789
 *                  end_time: 2022-02-17 11:20:45.171
 *                  version_name: 2.1.1
 *                  app_name: phonepay
 *                  record_duration: 00:10:12.618
 *      cpuReport:
 *          required:
 *              -device_id
 *              -user_id
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto incremented unique number
 *              device_id:
 *                  type: character varying
 *                  description: id of device that is being connected
 *              user_id:
 *                  type: character varying
 *                  description: id of the logged-in user
 *              session_id:
 *                  type: character varying
 *                  description: id of the session that has been started when an app is run.
 *              cpu_app_usage:
 *                  type: text
 *                  description: average cpu usage when an app in run.
 *              avg_memory_usage:
 *                  type: text
 *                  description: average memory usage when an app in run
 *              avg_power_usage:
 *                  type: text
 *                  description: average power usage when an app in run
 *              avg_gpu_usage:
 *                  type: text
 *                  description: average gpu usage when an app in run
 *              created_at:
 *                  type: timestamp without time zone
 *                  description: records the time of information created
 *          example:
 *                  device_id: 124212
 *                  user_id: 1414
 *                  cpu_app_usage: 58
 *                  avg_memory_usage: 78
 *                  avg_power_usage: 45
 *                  avg_gpu_usage: 89
 *      getDevices:
 *          required:
 *              -userId
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto incremented unique number
 *              device_id:
 *                  type: character varying
 *                  description: id of device that is being connected
 *              user_id:
 *                  type: character varying
 *                  description: id of the logged-in user
 *              session_id:
 *                  type: character varying
 *                  description: id of the session that has been started when an app is run.
 *              cpu_app_usage:
 *                  type: text
 *                  description: average cpu usage when an app in run.
 *              avg_memory_usage:
 *                  type: text
 *                  description: average memory usage when an app in run
 *              avg_power_usage:
 *                  type: text
 *                  description: average power usage when an app in run
 *              avg_gpu_usage:
 *                  type: text
 *                  description: average gpu usage when an app in run
 *              created_at:
 *                  type: timestamp without time zone
 *                  description: records the time of information created
 *          example:
 *                  device_id: 12421
 *                  userId: 1414
 *                  cpu_app_usage: 58
 *                  avg_memory_usage: 78
 *                  avg_power_usage: 45
 *                  avg_gpu_usage: 89
 *      getDevice:
 *          required:
 *              -device_id
 *              -userId
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto incremented unique number
 *              device_id:
 *                  type: character varying
 *                  description: id of device that is being connected
 *              user_id:
 *                  type: character varying
 *                  description: id of the logged-in user
 *              session_id:
 *                  type: character varying
 *                  description: id of the session that has been started when an app is run.
 *              cpu_app_usage:
 *                  type: text
 *                  description: average cpu usage when an app in run.
 *              avg_memory_usage:
 *                  type: text
 *                  description: average memory usage when an app in run
 *              avg_power_usage:
 *                  type: text
 *                  description: average power usage when an app in run
 *              avg_gpu_usage:
 *                  type: text
 *                  description: average gpu usage when an app in run
 *              created_at:
 *                  type: timestamp without time zone
 *                  description: records the time of information created
 *          example:
 *                  device_id: 12421
 *                  userId: 1414
 *                  cpu_app_usage: 58
 *                  avg_memory_usage: 78
 *                  avg_power_usage: 45
 *                  avg_gpu_usage: 89
 *      getUsers:
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto generated id of user
 *              name:
 *                  type: text
 *                  description: name of the user
 *              email:
 *                  type: text
 *                  description: email of the user that acts as a userId for login
 *          example:
 *                  id: 12421
 *                  name: user_name
 *                  email: useremail@email.com
 *      getUserById:
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto generated id of user
 *              name:
 *                  type: text
 *                  description: name of the user
 *              email:
 *                  type: text
 *                  description: email of the user that acts as a userId for login
 *          example:
 *                  id: 12421
 *                  name: user_name
 *                  email: useremail@email.com
 *      createUser:
 *          required:
 *              -name
 *              -email
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto generated id of user
 *              name:
 *                  type: text
 *                  description: name of the user
 *              email:
 *                  type: text
 *                  description: email of the user that acts as a userId for login
 *              created_at:
 *                  type: timestamp without time zone
 *                  description: records the time of user created
 *              updated_at:
 *                  type: timestamp without time zone
 *                  description: records the time of user updated
 *          example:
 *                  name: user_name
 *                  email: useremail@email.com
 *      updateUser:
 *          required:
 *              -name
 *              -email
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto generated id of user
 *              name:
 *                  type: text
 *                  description: name of the user
 *              email:
 *                  type: text
 *                  description: email of the user that acts as a userId for login
 *              created_at:
 *                  type: timestamp without time zone
 *                  description: records the time of user created
 *              updated_at:
 *                  type: timestamp without time zone
 *                  description: records the time of user updated
 *          example:
 *                  name: user_name
 *                  email: useremail@email.com
 *      deleteUser:
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto generated id of user
 *              name:
 *                  type: text
 *                  description: name of the user
 *              email:
 *                  type: text
 *                  description: email of the user that acts as a userId for login
 *          example:
 *                  id: 12421
 *                  name: user_name
 *                  email: useremail@email.com
 *
 *
 */

// tags defined below ******************************************************************************
/**
 * @swagger
 *  tags:
 *      name: authentication
 *      description: regester and login apis
 */
/**
 * @swagger
 *  tags:
 *      name: Device_Report_Apis
 *      description: add device, get device report apis,
 */
/**
 * @swagger
 *  tags:
 *      name: User_Details
 *      description: user related apis,
 */

// swagger docs defined below  *********************************************************************

/**
 * @swagger
 * /register:
 *    post:
 *      summary: regester new  user with his name, phone number and email
 *      tags: [authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/regester'
 *      responses:
 *        200:
 *          description: user succesfully regestered
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schema/regester'
 *        409:
 *          description: user already exists with the given email
 *        400:
 *          description: All input is required
 *        500:
 *          description: internal server error
 */

/**
 * @swagger
 * /login:
 *    post:
 *      summary: logging-In a user with his name and email
 *      tags: [authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/login'
 *      responses:
 *        200:
 *          description: user succesfully logged in
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schema/login'
 *        404:
 *          description: user not found, please regester
 *        400:
 *          description: invalid email id
 *        401:
 *          description: password incorrect
 *        500:
 *          description: internal server error
 */

/**
 * @swagger
 * /report/basic_info:
 *    post:
 *      summary: adding device informations
 *      tags: [Device_Report_Apis]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/reportInfo'
 *      parameters:
 *        - in: header
 *          name: token
 *          schema:
 *            type: string
 *          required: true
 *          description: user athentication token
 *      responses:
 *        200:
 *          description: device info succesfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schema/reportInfo'
 *        404:
 *          description: Report Not inserted
 *        400:
 *          description: DeviceId and UserId is required
 *        500:
 *          description: internal server error
 */

/**
 * @swagger
 * /report/cpu_detail:
 *    post:
 *      summary: adding device hardware usage informations
 *      tags: [Device_Report_Apis]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/cpuReport'
 *      parameters:
 *        - in: header
 *          name: token
 *          schema:
 *            type: string
 *          required: true
 *          description: user athentication token
 *      responses:
 *        200:
 *          description: device hardware usage info succesfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schema/cpuReport'
 *        404:
 *          description: Report Not Updated
 *        400:
 *          description: DeviceId and UserId is required
 *        500:
 *          description: internal server error
 */

/**
 * @swagger
 * /getdevices?userId={userId}:
 *    get:
 *      summary: getting all device report with respective to logged-in user
 *      tags: [Device_Report_Apis]
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *          required: true
 *          description: the user_id of the logged in user
 *
 *        - in: header
 *          name: token
 *          schema:
 *            type: string
 *          required: true
 *          description: user athentication token
 *      responses:
 *        200:
 *          description: device info succesfully fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                devices:
 *                  $ref: '#components/schema/getDevices'
 *        404:
 *          description: Report Not Updated
 *        400:
 *          description: UserId is required
 *        500:
 *          description: internal server error
 */

/**
 * @swagger
 * /getdevices?userId={userId}&deviceId={deviceId}:
 *    get:
 *      summary: getting one device respective to user
 *      tags: [Device_Report_Apis]
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *          required: true
 *          description: the user_id of the logged in user
 *        - in: path
 *          name: deviceId
 *          schema:
 *            type: string
 *          required: true
 *          description: the id of the device report belongs to
 *        - in: header
 *          name: token
 *          schema:
 *            type: string
 *          required: true
 *          description: user athentication token
 *
 *      responses:
 *        200:
 *          description:  device info succesfully fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                device:
 *                  $ref: '#components/schema/getDevice'
 *        404:
 *          description: Report Not found
 *        400:
 *          description: DeviceId and UserId is required
 *        500:
 *          description: internal server error
 */
/**
 * @swagger
 * /users:
 *    get:
 *      summary: getting all users details
 *      tags: [User_Details]
 *      responses:
 *        200:
 *          description:  all users details are fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                device:
 *                  $ref: '#components/schema/getUsers'
 *        404:
 *          description: users Not found
 *        500:
 *          description: internal server error
 */
/**
 * @swagger
 * /users/{user_id}:
 *    get:
 *      summary: getting a user details by their id
 *      tags: [User_Details]
 *      parameters:
 *        - in: path
 *          name: user_id
 *          schema:
 *            type: string
 *          required: true
 *          description: the user_id of the logged in user
 *      responses:
 *        200:
 *          description:  users details are fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                device:
 *                  $ref: '#components/schema/getUserById'
 *        404:
 *          description: users Not found
 *        500:
 *          description: internal server error
 */

/**
 * @swagger
 * /users/{user_id}:
 *    get:
 *      summary: getting a user details by their id
 *      tags: [User_Details]
 *      parameters:
 *        - in: path
 *          name: user_id
 *          schema:
 *            type: string
 *          required: true
 *          description: the user_id of the logged in user
 *      responses:
 *        200:
 *          description:  users details are fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                device:
 *                  $ref: '#components/schema/getUserById'
 *        404:
 *          description: users Not found
 *        500:
 *          description: internal server error
 */
/**
 * @swagger
 * /users:
 *    post:
 *      summary: creating user
 *      tags: [User_Details]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/createUser'
 *      responses:
 *        200:
 *          description: user succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schema/createUser'
 *        404:
 *          description: user not created
 *        400:
 *          description: name and email is required
 *        500:
 *          description: internal server error
 */
/**
 * @swagger
 * /users/{user_id}:
 *    put:
 *      summary: updating user
 *      tags: [User_Details]
 *      parameters:
 *        - in: path
 *          name: user_id
 *          schema:
 *            type: string
 *          required: true
 *          description: the user_id of the user whose details to be updated
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/updateUser'
 *      responses:
 *        200:
 *          description: user succesfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schema/updateUser'
 *        404:
 *          description: user not updated
 *        400:
 *          description: name and email is required
 *        500:
 *          description: internal server error
 */
/**
 * @swagger
 * /users/{user_id}:
 *    delete:
 *      summary: deleting a user by user_id
 *      tags: [User_Details]
 *      parameters:
 *        - in: path
 *          name: user_id
 *          schema:
 *            type: string
 *          required: true
 *          description: the user_id of the user to be removed
 *      responses:
 *        200:
 *          description:  user deleted
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                device:
 *                  $ref: '#components/schema/deleteUser'
 *        404:
 *          description: users Not found
 *        500:
 *          description: internal server error
 */
