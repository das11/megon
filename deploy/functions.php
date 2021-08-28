<?php
// ob_start();
// header('Access-Control-Allow-Origin: *');

// sleep(5);

$func = $_REQUEST['func'];

if ($func == 'GetSalons') {
    getSalons();
} elseif ($func == 'GetCategoriesAndServices') {
    getCategoriesAndServices();
} elseif ($func == 'GetServiceAvailability') {
    getServiceAvailability();
} elseif ($func == 'GetOTP') {
    getOTP();
} elseif ($func == 'Login') {
    login();
} elseif ($func == 'SaveName') {
    saveName();
} elseif ($func == 'CreateBooking') {
    createBooking();
} elseif ($func == 'CreateBookingAndPayment') {
    createBookingAndPayment();
} elseif ($func == 'CheckCoupon') {
    checkCoupon();
} elseif ($func == 'PastBookings') {
    pastBookings();
} elseif ($func == 'PastBookingsDetail') {
    pastBookingsDetail();
} elseif ($func == 'GetPromos') {
    getPromos();
} elseif ($func == 'Redeem') {
    redeem();
} elseif ($func == 'CancelBooking') {
    cancelBooking();
} elseif ($func == 'CheckWallet') {
    checkWallet();
} elseif ($func == 'GetCouponCode') {
    getCouponCode();
} elseif ($func == 'getOTP'){
    getOTP();
}

function getOTP() {
    //$phone = $_GET['phone'];
    
   // $otp = 'rand(1000,9999)';
   echo "hello";
    
    // $data['otp'] = "0000";
    // echo json_encode($data);
}

function test() {
    include 'config.php';
    $name = $_GET['name'];
    $email = $_GET['email'];
    $password = $_GET['password'];
    $phone = $_GET['phone'];
    $type = 'W';
    $status = '0';
    
    $query = "INSERT INTO `users`(`name`,`email`,`password`,`phone`,`type`,`status`) VALUES (?,?,?,?,?,?)"; 
				//Autocommit
		mysqli_autocommit($connection, FALSE);
		$db_write_status="";
		$stmt = $connection->prepare($query);						
		$stmt->bind_param("ssssss", $name, $email,  $password, $phone, $type, $status);
		if (!$stmt->execute()) {
			$db_write_status .= $stmt->errno . " - " . $stmt->error;
		}
		if($stmt->affected_rows <= 0){
			$db_write_status .= "error";
		}

		$stmt->close();

		if(trim($db_write_status) != "") {
	                //echo "$db_write_status";
			mysqli_rollback($connection);
		} elseif (trim($db_write_status) == "") {
			/* commit entire transaction, if all steps succeed */
			mysqli_commit($connection);
			$db_write_status = "success";
			$db_msg = "success";
		}
    
    $data['name'] = $name;
    $data['email'] = $email;
    $data['phone'] = $phone;
    $data['status'] = $db_msg;
    echo json_encode($data);
}

function getSalons() {
    
    include 'db.php';
    
    $latitude = $_GET['latitude'];
    $longitude = $_GET['longitude'];
    
    $get = mysqli_query($connection,"select vendor_id, vendor_name, vendor_address, vendor_phone, img_path, latitude, longitude, ROUND(3956 * 2 * ASIN(SQRT( POWER(SIN(($latitude - latitude)*pi()/180/2),2) +COS($latitude*pi()/180 )*COS(latitude*pi()/180) *POWER(SIN(($longitude-longitude)*pi()/180/2),2))), 2) as distance from vendors where longitude between ($longitude-10000/cos(radians($latitude))*69) and ($longitude+10000/cos(radians($latitude))*69) and latitude between ($latitude-(10000/69)) and ($latitude+(10000/69)) order by distance asc");
    
    if (mysqli_num_rows($get) > 0) {
        
        $salonsCount = mysqli_num_rows($get);
        
        $salons = [];
        
        while($row = mysqli_fetch_assoc($get)) {
            array_push($salons, $row);
        }
        
        $result = 1;
        $message = '';
        $data = $salons;
        $count = $salonsCount;

    } else {
        $result = 0;
        $message = "No Salons Found";
        $data = [];
        $count = 0;
    }
    
    $response['ResultCode'] = $result;
    $response['Message'] = $message;
    $response['DataSet'] = $data;
    $response['Count'] = $count;
    
    echo json_encode($response);
    
}

function getCategoriesAndServices() {
    include 'db.php';
    
    $vendor_id = $_GET['vendor_id'];
    
    $categories = [];
    
    // , (select count(*) from categories c1 join services s1 on c1.category_id = s1.category_id where c1.category_id = c.category_id) as service_count
    
    $getCatgories = mysqli_query($connection,"select c.category_id, c.category_name from categories c where c.vendor_id = '$vendor_id'");
    
    if (mysqli_num_rows($getCatgories) > 0) {
        
        while($row_cat = mysqli_fetch_assoc($getCatgories)) {
            
            $row_cat['services_list'] = [];
            
            array_push($categories, $row_cat);

        }
        
        $getServices = mysqli_query($connection,"SELECT c.category_id, s.service_id, s.service_name, s.service_price, s.service_duration, s.status FROM vendors v join categories c on v.vendor_id = c.vendor_id join services s on c.category_id = s.category_id where v.vendor_id = '$vendor_id' and s.type = 'S' and s.status = 'Active' order by c.category_id");
    
        $services = [];
        
        if (mysqli_num_rows($getServices) > 0) {
            
            while ($row = mysqli_fetch_assoc($getServices)) {
                
                foreach($categories as $index => $category) {
                    
                    if ($category['category_id'] == $row['category_id']) {
                        array_push($categories[$index]['services_list'], $row);
                    }
                    
                }
                
            }
            
            $result = 1;
            
        } else {
            // no result found
            
            $result = 0;
        }
        
    } else {
        
        $result = 0;
        
        // no categories
    }
    
    $data['ResultCode'] = $result;
    $data['Message'] = '';
    $data['DataSet'] = $categories;
    
    echo json_encode($data);
    
    
}

function getServiceAvailability() {
    
    date_default_timezone_set("Asia/Calcutta");
    
    // echo date('Y-m-d H:i:s');
    
    // exit;
    
    include 'db.php';
    
    $vendor_id = $_GET['vendor_id'];
    $service_ids = rtrim($_GET['services_id'], ','); 
    $userDate = $_GET['userDate'];
    $totalServiceTime = $_GET['serviceDuration'];
    
    $hour = floor($totalServiceTime / 60).':'.($totalServiceTime -   floor($totalServiceTime / 60) * 60) . ':00';
    
    $userDate = date('Y-m-d', strtotime($userDate));
    
    $date = date('Y-m-d');
    
    $currentTime = date('h:i:s');
    
    $startEndTime = mysqli_query($connection,"select opening_time, closing_time, vendor_bandwidth from vendors where vendor_id = '$vendor_id' limit 1");
    
    if (mysqli_num_rows($startEndTime) > 0) {
        
        while ($row_vendor = mysqli_fetch_assoc($startEndTime)) {
            $opening_time = $row_vendor['opening_time'];
            $closing_time = $row_vendor['closing_time'];
            $seats = $row_vendor['vendor_bandwidth'];
            
            $jsonSlots = [];
            
            $query = "SELECT DATE_FORMAT(ub.start_time, '%T') as start_time, DATE_FORMAT(ub.end_time, '%T') as end_time from user_bookings ub join user_bookings_services ubs on ub.booking_id = ubs.booking_id where ub.start_time like '$userDate%'";
            
            // exit;
            
            $getSlots = mysqli_query($connection,$query); 
            
            $betweenStr = "";
            $str = "";
            
            if (mysqli_num_rows($getSlots) > 0) {
                
                while($row_slots = mysqli_fetch_assoc($getSlots)) {
                    $start_time = $row_slots['start_time'];
                    $end_time = $row_slots['end_time'];
                    
                    $betweenStr .= " and slot NOT BETWEEN '$start_time' and '$end_time'";
                    
                }
                
                if ($date == $userDate) {
                    
                    
                    // echo "SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and SUBTIME('$closing_time', '$hour') $betweenStr and slot >= $currentTime";
                    
                    // exit;
                    
                    $freeSlots = mysqli_query($connection,"SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and SUBTIME('$closing_time', '$hour') $betweenStr and slot >= CURRENT_TIME()");
                    
                    // $freeSlots = mysql_query("SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and '$closing_time' $betweenStr and slot >= CURRENT_TIME()");
                    
                    while($row_free = mysqli_fetch_assoc($freeSlots)) {
                        $slot = $row_free['slot'];
                        
                        array_push($jsonSlots, $slot);
                    }
                } else {
                    
                    // echo "SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and '$closing_time' and (select count(*) seat from user_bookings ub join user_bookings_services ubs on ub.booking_id = ubs.booking_id where ubs.service_id IN ($service_ids) $str)  < $seats $betweenStr";
                    
                    // echo "SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and '$closing_time' $betweenStr";
                    
                    // $freeSlots = mysql_query("SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and '$closing_time' $betweenStr");
                    
                    // echo "SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and SUBTIME('$closing_time', '$hour') $betweenStr";
                    
                    $freeSlots = mysqli_query($connection,"SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and SUBTIME('$closing_time', '$hour') $betweenStr");
                    
                    while($row_free = mysqli_fetch_assoc($freeSlots)) {
                        $slot = $row_free['slot'];
                        
                        array_push($jsonSlots, $slot);
                    }
                    
                }
                
            } else {
                // all free slots
                
                if ($date == $userDate) {
                
                    $freeSlots = mysqli_query($connection,"SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and SUBTIME('$closing_time', '$hour') and slot >= CURRENT_TIME()");
                        
                    while($row_free = mysqli_fetch_assoc($freeSlots)) {
                        $slot = $row_free['slot'];
                        
                        array_push($jsonSlots, $slot);
                    }
                
                } else {
                    $freeSlots = mysqli_query($connection,"SELECT TIME_FORMAT(slot, '%r') as slot from time_slots where slot between '$opening_time' and SUBTIME('$closing_time', '$hour')");
                        
                    while($row_free = mysqli_fetch_assoc($freeSlots)) {
                        $slot = $row_free['slot'];
                        
                        array_push($jsonSlots, $slot);
                    }
                }
            }
            
            echo json_encode($jsonSlots);
    
        }
        
    } else {
        // no vendor found
    }
    
}

function getOTP() {
    
    include 'db.php';
    
    $phone = $_GET['phone'];
    $token = $_GET['token'];
    
    $otp = rand(1000,9999);
    
    $message = urlencode("Hi, your OTP is $otp. Visit us at https://theimpressionspastudio.com");
    
    $result = 1;
    
    $get = mysqli_query($connection,"select user_id, user_name, referral_code from users where user_phone = '$phone'");
    
    if (mysqli_num_rows($get) > 0) {
        while ($row = mysqli_fetch_assoc($get)) {
            $user_id = $row['user_id'];
            $name = $row['user_name'];
            $referral_code = $row['referral_code'];
            
            if ($referral_code == null || $referral_code == 'null') {
                
                $rand = rand(1000,9999);
                
                $r = rand(1,9);

                $salt = $phone;
                
                $referral_code = crypt($rand, $salt);
                
                $referral_code = substr($referral_code, -7) . $r;
                
                mysqli_query($connection,"update users set last_login_date = NOW(), referral_code = '$referral_code' where user_phone = '$phone'");
            } else {
                mysqli_query($connection,"update users set last_login_date = NOW() where user_phone = '$phone'");
            }
            
            $ins = mysqli_query($connection,"insert into devices (device_name, user_id, push_token_id, date_created, date_modified) values ('', '$user_id', '$token', NOW(), NOW())");
        }
    } else {
        
        // $ins = mysql_query("insert into devices (device_name, user_id, push_token_id, date_created, date_modified) values ('', '$user_id', '$token', NOW(), NOW())");
        
        $user_id = '';
        $name = '';
        $referral_code = '';
    }
    
    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => "http://198.24.149.4/API/pushsms.aspx?loginID=atcpl123&password=123456&mobile=$phone&text=$message&senderid=ASTISS&route_id=2&Unicode=0",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 1,
      CURLOPT_CUSTOMREQUEST => "GET"
    ));
    
    $response = curl_exec($curl);
    $err = curl_error($curl);
    
    curl_close($curl);
    
    $data['ResultCode'] = $result;
    $data['OTP'] = $otp;
    $data['UserId'] = $user_id;
    $data['UserName'] = $name;
    $data['ReferralCode'] = $referral_code;
    
    echo json_encode($data);
}

function login() {
    
    include 'db.php';
    
    $name = $_GET['name'];
    $phone = $_GET['phone'];
    $token = $_GET['token'];
    $referral = $_GET['referral'];
    
    $get = mysqli_query($connection,"select user_id from users where referral_code = '$referral'");
    
    $rand = rand(1000,9999);

    $salt = $phone;
    
    $referral_code = crypt($rand, $salt);

    
    if (mysqli_num_rows($get) > 0 && $referral != '' && $referral != '0') {
        while ($row = mysqli_fetch_assoc($get)) {
            $user_id = $row['user_id'];
        }
        
        $redeem_amount = 100.0;
        
        $update = mysqli_query($connection,"update users set redeem_amount = redeem_amount + $redeem_amount where referral_code = '$referral'");

        $ins = mysqli_query($connection,"insert into users (user_name, user_phone, referred_by, date_created, date_modified, last_login_date, referral_code) values ('$name', '$phone', '$user_id', NOW(), NOW(), NOW(), '$referral_code')");
        
        // echo "insert into users (user_name, user_phone, referred_by, date_created, date_modified, last_login_date) values ('$name', '$phone', '$user_id', NOW(), NOW(), NOW())";
        
    } else {
        $ins = mysqli_query($connection,"insert into users (user_name, user_phone, date_created, date_modified, last_login_date, referral_code) values ('$name', '$phone', NOW(), NOW(), NOW(), '$referral_code')");
        
        // echo "insert into users (user_name, user_phone, date_created, date_modified, last_login_date) values ('$name', '$phone', NOW(), NOW(), NOW())";
    }
    
    if (!$ins) {
        $result = 0;
        $user_id = '';
    } else {
        $user_id = mysqli_insert_id($connection);
        
        $insToken = mysqli_query($connection,"insert into devices (device_name, user_id, push_token_id, date_created, date_modified) values ('', '$user_id', '$token', NOW(), NOW())");
        
        $result = 1;
    }

    
    $data['ResultCode'] = $result;
    $data['UserId'] = $user_id;
    $data['ReferralCode'] = $referral_code;
    
    echo json_encode($data);
}

function saveName() {
    include 'db.php';
    
    $name = $_GET['name'];
    $phone = $_GET['phone'];
    
    mysqli_query($connection,"update users set user_name = '$name', date_modified = NOW() where user_phone = '$phone'");
    
    $result = 1;
    $user_id = mysqli_insert_id($connection);
    
    $data['ResultCode'] = $result;
    $data['UserId'] = $user_id;
    
    echo json_encode($data);
}

function createBooking() {
    
    include 'db.php';
    
    $now = date('Y-m-d H:i:s');
    
    $userId = $_POST['userId'];
    $startTime = $_POST['startTime'];
    $services = $_POST['services'];
    $totalPrice = $_POST['totalPrice'];
    $discount = $_POST['discount'];
    $redeem = $_POST['redeemAmount'];
    
    if ($redeem > 0) {
        $up = mysqli_query($connection,"update users set redeem_amount = redeem_amount - $redeem where user_id = '$userId'");
    }
    
    // if ($startTime >= $now) {
    
        // $totalPrice = 0;
        $totalDuration = 0;
        
        $subTotal = 0.0;
        
        $service_query = 'insert into user_bookings_services (booking_id, service_id) values ';
        
        $services = json_decode($services);
        
        foreach($services as $index => $service) {
            
            $salonId = $service -> item -> salonId;
            $categoryId = $service -> item -> categoryId;
            $categoryType = $service -> item -> categoryType;
            $serviceId = $service -> item -> serviceId;
            $serviceType = $service -> item -> serviceType;
            $price = $service -> item -> price;
            $serviceDuration = $service -> item -> serviceDuration;
            
            $totalDuration = $totalDuration + $serviceDuration;
            
            $subTotal = $subTotal + $price;
        }
        
        $sub_total = ($subTotal/100) * 18;
        
        $startTime = date('Y-m-d H:i:s', strtotime($startTime));
        
        $endTime = date("Y-m-d H:i:s", strtotime($startTime . "+$totalDuration minutes"));
        
        $insQuery = "insert into user_bookings (vendor_id, user_id, booking_date, subtotal, gst, booking_price, total_price, discount, booking_status, booking_method, start_time, end_time) values ('$salonId', '$userId', NOW(), '$subTotal', $sub_total, '$totalPrice', $totalPrice, '$discount',  '0', '5', '$startTime', '$endTime')";
        
        $ins = mysqli_query($connection,$insQuery);
        
        if ($ins) {
            $lastId = mysqli_insert_id($connection);
            
            foreach($services as $index => $service) {
            
                $salonId = $service -> item -> salonId;
                $categoryId = $service -> item -> categoryId;
                $categoryType = $service -> item -> categoryType;
                $serviceId = $service -> item -> serviceId;
                $serviceType = $service -> item -> serviceType;
                $price = $service -> item -> price;
                $serviceDuration = $service -> item -> serviceDuration;
                
                $totalDuration = $totalDuration + $serviceDuration;
                
                $service_query .= "('$lastId', '$serviceId'), "; 
            }
            
            $service_query = trim($service_query, ", ");
            
            $insServices = mysqli_query($connection,$service_query);
            
            if ($insServices) {
                
                $getGCM = mysqli_query($connection,"select push_token_id from devices where user_id = '$userId' order by device_id desc");
                
                if (mysqli_num_rows($getGCM) > 0) {
                    while ($rowGCM = mysqli_fetch_assoc($getGCM)) {
                        $token = $rowGCM['push_token_id'];
                        
                        sendNotification($token, $lastId);
                    }
                }
                
                $result = 1;
                $message = "Your booking ID is $lastId";
                $bookingID = $lastId;
            } else {
                $result = 0;
                $message = '';
                $bookingID = '';
            }
            
        } else {
            $result = 0;
            $message = '';
        }
        
    // } else {
    //     $result = 2;
    //     $message = 'The time slot selected is no longer valid';
    // }
    
    $data['ResultCode'] = $result;
    $data["Message"] = $message;
    $data['BookingID'] = $bookingID;
    
    echo json_encode($data);
    
}

function createBookingAndPayment() {
    
    include 'db.php';
    
    $now = date('Y-m-d H:i:s');
    
    $userId = $_POST['userId'];
    $startTime = $_POST['startTime'];
    $services = $_POST['services'];
    $totalPrice = $_POST['totalPrice'];
    $discount = $_POST['discount'];
    $redeem = $_POST['redeemAmount'];
    $paymentId = $_POST['paymentId'];
    
    if ($redeem > 0) {
        $up = mysqli_query($connection,"update users set redeem_amount = redeem_amount - $redeem where user_id = '$userId'");
    }
    
    // if ($startTime >= $now) {
    
        // $totalPrice = 0;
        $totalDuration = 0;
        
        $subTotal = 0.0;
        
        $service_query = 'insert into user_bookings_services (booking_id, service_id) values ';
        
        $services = json_decode($services);
        
        foreach($services as $index => $service) {
            
            $salonId = $service -> item -> salonId;
            $categoryId = $service -> item -> categoryId;
            $categoryType = $service -> item -> categoryType;
            $serviceId = $service -> item -> serviceId;
            $serviceType = $service -> item -> serviceType;
            $price = $service -> item -> price;
            $serviceDuration = $service -> item -> serviceDuration;
            
            $totalDuration = $totalDuration + $serviceDuration;
            
            $subTotal = $subTotal + $price;
        }
        
        $sub_total = ($subTotal/100) * 18;
        
        $startTime = date('Y-m-d H:i:s', strtotime($startTime));
        
        $endTime = date("Y-m-d H:i:s", strtotime($startTime . "+$totalDuration minutes"));
        
        $insQuery = "insert into user_bookings (vendor_id, user_id, booking_date, subtotal, gst, booking_price, total_price, discount, booking_status, booking_method, start_time, end_time, payment_request_id) values ('$salonId', '$userId', NOW(), '$subTotal', $sub_total, '$totalPrice', $totalPrice, '$discount',  '3', '2', '$startTime', '$endTime', '$paymentId')";
        
        $ins = mysqli_query($connection,$insQuery);
        
        if ($ins) {
            $lastId = mysqli_insert_id($connection);
            
            foreach($services as $index => $service) {
            
                $salonId = $service -> item -> salonId;
                $categoryId = $service -> item -> categoryId;
                $categoryType = $service -> item -> categoryType;
                $serviceId = $service -> item -> serviceId;
                $serviceType = $service -> item -> serviceType;
                $price = $service -> item -> price;
                $serviceDuration = $service -> item -> serviceDuration;
                
                $totalDuration = $totalDuration + $serviceDuration;
                
                $service_query .= "('$lastId', '$serviceId'), "; 
            }
            
            $service_query = trim($service_query, ", ");
            
            $insServices = mysqli_query($connection,$service_query);
            
            if ($insServices) {
                
                $getGCM = mysqli_query($connection,"select push_token_id from devices where user_id = '$userId' order by device_id desc");
                
                if (mysqli_num_rows($getGCM) > 0) {
                    while ($rowGCM = mysqli_fetch_assoc($getGCM)) {
                        $token = $rowGCM['push_token_id'];
                        
                        sendNotification($token, $lastId);
                    }
                }
                
                $result = 1;
                $message = "Your booking ID is $lastId";
                $bookingID = $lastId;
            } else {
                $result = 0;
                $message = '';
                $bookingID = '';
            }
            
        } else {
            $result = 0;
            $message = '';
        }
        
    // } else {
    //     $result = 2;
    //     $message = 'The time slot selected is no longer valid';
    // }
    
    $data['ResultCode'] = $result;
    $data["Message"] = $message;
    $data['BookingID'] = $bookingID;
    
    echo json_encode($data);
    
}

// sendNotification('7ddc9d30-2081-47c6-88f6-67cdd530845a', '1123');

function sendNotification($token, $bookingId) {
    
    $message = "Hi there, Your booking is successful. Your booking ID is $bookingId";
    
	$content = array(
	"en" => "$message"
	);

	$fields = array(
		'app_id' => "ee3a4878-93da-4e70-87d6-e044a2da6e2f",
		'include_player_ids' => array($token),
		'large_icon' => 'http://theimpressionspastudio.com/assets/images/theimpressionlogo.png',
		'data' => array("contents" => "promo","image" => "","internal_link" => '',"external_link" => ""),
		'contents' => $content
		);

	$fields = json_encode($fields);

	$ids = json_encode($gcmIds);


	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
		'Authorization: Basic OWI2NjIzNTAtYTU2Zi00Yjg0LWI1YWQtNTEyYjEwNzRkOTdm'));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_HEADER, FALSE);
	curl_setopt($ch, CURLOPT_POST, TRUE);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 1);

	$response = curl_exec($ch);
	curl_close($ch);
    
}

function checkCoupon() {
    $vendor_id = $_GET['vendor_id'];
    $coupon = $_GET['coupon'];
    $totalPrice = $_GET['totalPrice'];
    
    include 'db.php';
    $datetime = date('Y-m-d H:m:s');
    $get = mysqli_query($connection,"select discount from coupon where code = '$coupon' and start_date <= '$datetime' and expiry_date >= '$datetime'");
    
    if (mysqli_num_rows($get) > 0) {
        
        while ($row = mysqli_fetch_assoc($get)) {
            $discount = $row['discount'];
        }
        
        $couponPrice = ($discount / 100) * $totalPrice;
        $newPrice = $totalPrice - (($discount / 100) * $totalPrice);
        
        $result = 1;
        
        
    } else {
        $result = 0;
        $newPrice = 0;
        $couponPrice = 0;
        $discount = 0;
    }
    
    $data['ResultCode'] = $result;
    $data['NewPrice'] = $newPrice;
    $data['CouponPrice'] = $couponPrice;
    $data['Discount'] = $discount;
    
    echo json_encode($data);
    
    
}

function pastBookings() {
    
    include 'db.php';
    
    $user_id = $_GET['user_id'];
    
    $get = mysqli_query($connection,"select booking_id, DATE_FORMAT(booking_date, '%b - %d %Y') as booking_date, booking_price, gst, booking_status from user_bookings where user_id = '$user_id' and booking_status != '2' order by booking_id desc limit 20");
    
    $bookings = [];
    
    if (mysqli_num_rows($get) > 0) {
        while ($row = mysqli_fetch_assoc($get)) {
            
            $booking['booking_id'] = $row['booking_id'];
            $booking['booking_date'] = $row['booking_date'];
            $booking['booking_price'] = $row['booking_price'];
            $booking['gst'] = $row['gst'];
            $booking['booking_status'] = $row['booking_status'];
            
            array_push($bookings, $booking);
        }
        
        $result = 1;
    } else {
        $result = 0;
    }
    
    $data['ResultCode'] = $result;
    $data['DataSet'] = $bookings;
    
    echo json_encode($data);
}

function pastBookingsDetail() {
    
    include 'db.php';
    
    $user_id = $_GET['user_id'];
    
    $booking_id = $_GET['booking_id'];
    
    $get = mysqli_query($connection,"select services.service_name, services.service_price from user_bookings_services inner join services on user_bookings_services.service_id = services.service_id where user_bookings_services.booking_id = '$booking_id'");
    
    $bookings = [];
    
    if (mysqli_num_rows($get) > 0) {
        while ($row = mysqli_fetch_assoc($get)) {
            
            $booking['service_name'] = $row['service_name'];
            $booking['service_price'] = $row['service_price'];
            
            array_push($bookings, $booking);
        }
        
        $result = 1;
    } else {
        $result = 0;
    }
    
    $data['ResultCode'] = $result;
    $data['DataSet'] = $bookings;
    
    echo json_encode($data);
}

function getPromos() {
    include 'db.php';
    
    $get = mysqli_query($connection,"select img_path from promos order by id desc");
    
    if (mysqli_num_rows($get) > 0) {
        
        $imgs = [];
        
        while ($row = mysqli_fetch_assoc($get)) {
            $img_path = $row['img_path'];
            
            array_push($imgs, $img_path);
        }
        
        $result = 1;
        
    } else {
        $result = 0;
        $imgs = [];
    }
    
    $data['ResultCode'] = 1;
    $data['DataSet'] = $imgs;
    
    echo json_encode($data);
}

function redeem() {
    include 'db.php';
    
    $userId = $_GET['userId'];
    
    $get = mysqli_query($connection,"select redeem_amount from users where user_id = '$userId' and redeem_amount > 0 and redeem_amount IS NOT NULL");
    
    if (mysqli_num_rows($get) > 0) {
        while ($row = mysqli_fetch_assoc($get)) {
            $redeem_amount = $row['redeem_amount'];
        }
        
        $result = 1;
        
    } else {
        $result = 0;
        $redeem_amount = 0;
    }
    
    $data['ResultCode'] = $result;
    $data['Redeem'] = $redeem_amount;
    
    echo json_encode($data);
}

function cancelBooking() {
    
    $booking_id = $_GET['booking_id'];
    
    include 'db.php';
    
    $update = mysqli_query($connection,"update user_bookings set booking_status = '2' where booking_id = '$booking_id'");
    
    if ($update) {

        $result = 1;
        
    } else {
        $result = 0;
       
    }
    
    $data['ResultCode'] = $result;
    
    echo json_encode($data);
    
    
    // echo "update user_bookings set booking_status = '2' where booking_id = '$booking_id'";
}

function checkWallet() {
    $user_id = $_GET['user_id'];
    
    include 'db.php';
    
    $get = mysqli_query($connection,"select redeem_amount from users where user_id = '$user_id'");
    
    if (mysqli_num_rows($get) > 0) {
        while ($row = mysqli_fetch_assoc($get)) {
            $redeem_amount = $row['redeem_amount'];
        }
        
        $result = 1;
        
    } else {
        $result = 0;
        $redeem_amount = 0;
    }
    
    $data['ResultCode'] = $result;
    $data['Wallet'] = $redeem_amount;
    
    echo json_encode($data);
}

function getCouponCode() {
    include 'db.php';
    $datetime = date('Y-m-d H:m:s');
    $query = "select code,discount, DATE_FORMAT(start_date, '%b %d %Y %H:%i%p') as start_date,expiry_date from coupon where expiry_date >= '$datetime'";
    $get = mysqli_query($connection,$query);
    
    if (mysqli_num_rows($get) > 0) {
        
        $coupons = [];
        
        while ($row = mysqli_fetch_assoc($get)) {
           // $couponcode = $row['code'];
            
            array_push($coupons, $row);
        }
        
        $result = 1;
        
    } else {
        $result = 0;
        $coupons = [];
    }
    
    $data['ResultCode'] = 1;
    $data['DataSet'] = $coupons;
    
    echo json_encode($data);
}

?>