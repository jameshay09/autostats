var myAppId = "rg-uni-kieran-Abgi48jdkkh38FFdnCX";



      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Odometer');
        data.addRows([
          ['Test 5', 84998],
          ['Test 4', 84998],
          ['Test 3', 81607],
          ['Test 2', 75960],
          ['Test 1', 68611]
        ]);

        // Set chart options
        var options = {'title':'Mileage data for last 5 tests.',
                       'width':1000,
                       'height':500,
			'backgroundColor':'transparent',
					  
					   
					  };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

        $(document).ready(function () {
			
$('#t_area').on('keyup',function() {
    		$('#btn').show();
		});
			$('#t_area1').on('keyup',function() {
    		$('#btn1').show();
			});
            $("#vehicle-smart-sample-form").submit(function (e) {
                e.preventDefault();
                var reg = $("#reg").val();
                $.ajax({
                    "async": true,
                    "crossDomain": true,
                    "url": "https://www.getvehiclesmart.com/rest/vehicleData?reg=" + reg + "&isRefreshing=false&appid="+myAppId,
                    "method": "GET",
                    "headers": {
                        "Content-Type": "application/text",
                        "Accept": "application/json",
                        "Cache-Control": "no-cache"
                    }
                })
					.done(function (response) {
                    console.log(response);

                    if (response && response.Success) {
						
						

                        $("#details").html(
                                "<p>Make:" + response.VehicleDetails.Make + "</p>" +
                                "<p>Model:" + response.VehicleDetails.Model + "</p>" +
                                "<p>Fuel:" + response.VehicleDetails.Fuel + "</p>" +
                                "<p>Date of Registration:" + response.VehicleDetails.DateOfRegistration + "</p>" +
							    "<p>Colour:" + response.VehicleDetails.Colour + "</p>" +
							    "<p>Cylinder Capacity:" + response.VehicleDetails.CylinderCapacity + "</p>" +
							    "<p>CO2:" + response.VehicleDetails.CO2Emissions + "</p>" +
							    "<p>Wheel Plan:" + response.VehicleDetails.Wheelplan + "</p>"	 );
						
						$("#mot_details").html(
                                "<p>M.O.T Expiry:" + response.VehicleDetails.MotExpiryDate + "</p>" +
                                "<p>M.O.T Days Left:" + response.CalculatedMot.MotDaysLeft + "</p>"
								);
						$(".road_tax").html(
                                "<p>Taxed:" + response.VehicleDetails.Taxed + "</p>" +
                                "<p>Tax Expiry:" + response.VehicleDetails.TaxDueDate + "</p>"
								);
								$(".pass").html(
                                "<p>Pass:" + response.VehicleMotData[0].TestResult + "</p>" 
								);
								$(".pass1").html(
                                "<p>Pass:" + response.VehicleMotData[1].TestResult + "</p>" 
								);
								$(".pass2").html(
                                "<p>Pass:" + response.VehicleMotData[2].TestResult + "</p>" 
								);
								$(".pass3").html(
                                "<p>Pass:" + response.VehicleMotData[3].TestResult + "</p>" 
								);
								$(".pass4").html(
                                "<p>Pass:" + response.VehicleMotData[4].TestResult + "</p>" 
								);
								$(".pass5").html(
                                "<p>Pass:" + response.VehicleMotData[5].TestResult + "</p>" 
								);
								$(".pass6").html(
                                "<p>Pass:" + response.VehicleMotData[6].TestResult + "</p>" 
								);
								$(".pass7").html(
                                "<p>Pass:" + response.VehicleMotData[7].TestResult + "</p>" 
								);
								$(".mot_test").html(
                                "<p>M.O.T Expiry:" + response.VehicleMotData[0].ExpiryDate + "</p>" 
								);
								$(".mot_test1").html(
                                "<p>M.O.T Expiry:" + response.VehicleMotData[1].ExpiryDate + "</p>"
								);
								$(".mot_test2").html(
                                "<p>M.O.T Expiry:" + response.VehicleMotData[2].ExpiryDate + "</p>" 
								);
								$(".mot_test3").html(
                                "<p>M.O.T Expiry:" + response.VehicleMotData[3].ExpiryDate + "</p>" 
								);
								$(".mot_test4").html(
                                "<p>M.O.T Expiry:" + response.VehicleMotData[4].ExpiryDate + "</p>" 
								);
								$(".mot_test5").html(
                                "<p>M.O.T Expiry:" + response.VehicleMotData[5].ExpiryDate + "</p>"
								);
								$(".mot_test6").html(
                                "<p>M.O.T Expiry:" + response.VehicleMotData[6].ExpiryDate + "</p>" 
								);
								$(".mot_test7").html(
                                "<p>M.O.T Expiry:" + response.VehicleMotData[7].ExpiryDate + "</p>" 
								);
								$(".mot_overview").html(
                               "<p>Test Date:" + response.VehicleMotData[0].TestDate + "</p>" +
                                "<p>Odometer:" + response.VehicleMotData[0].Odometer + "</p>" +
								  "<p>M.O.T Number:" + response.VehicleMotData[0].MotNumber + "</p>" +
								  "<p>Advisories:" + response.VehicleMotData[0].AdvisoryNoticeItems + "</p>" +
								   "<p>Reasons for Failure:" + response.VehicleMotData[0].ReasonsForFailure + "</p>" 
								);
								$(".mot_overview1").html(
                               "<p>Test Date:" + response.VehicleMotData[1].TestDate + "</p>" +
                                "<p>Odometer:" + response.VehicleMotData[1].Odometer + "</p>" +
								  "<p>M.O.T Number:" + response.VehicleMotData[1].MotNumber + "</p>" +
								  "<p>Advisories:" + response.VehicleMotData[1].AdvisoryNoticeItems + "</p>" +
								   "<p>Reasons for Failure:" + response.VehicleMotData[1].ReasonsForFailure + "</p>" 
								);
								$(".mot_overview2").html(
                               "<p>Test Date:" + response.VehicleMotData[2].TestDate + "</p>" +
                                "<p>Odometer:" + response.VehicleMotData[2].Odometer + "</p>" +
								  "<p>M.O.T Number:" + response.VehicleMotData[2].MotNumber + "</p>" +
								  "<p>Advisories:" + response.VehicleMotData[2].AdvisoryNoticeItems + "</p>" +
								   "<p>Reasons for Failure:" + response.VehicleMotData[2].ReasonsForFailure + "</p>" 
								);
								$(".mot_overview3").html(
                               "<p>Test Date:" + response.VehicleMotData[3].TestDate + "</p>" +
                                "<p>Odometer:" + response.VehicleMotData[3].Odometer + "</p>" +
								  "<p>M.O.T Number:" + response.VehicleMotData[3].MotNumber + "</p>" +
								  "<p>Advisories:" + response.VehicleMotData[3].AdvisoryNoticeItems + "</p>" +
								   "<p>Reasons for Failure:" + response.VehicleMotData[3].ReasonsForFailure + "</p>" 
								);
								$(".mot_overview4").html(
                               "<p>Test Date:" + response.VehicleMotData[4].TestDate + "</p>" +
                                "<p>Odometer:" + response.VehicleMotData[4].Odometer + "</p>" +
								  "<p>M.O.T Number:" + response.VehicleMotData[4].MotNumber + "</p>" +
								  "<p>Advisories:" + response.VehicleMotData[4].AdvisoryNoticeItems + "</p>" +
								   "<p>Reasons for Failure:" + response.VehicleMotData[4].ReasonsForFailure + "</p>" 
								);
								$(".mot_overview5").html(
                               "<p>Test Date:" + response.VehicleMotData[5].TestDate + "</p>" +
                                "<p>Odometer:" + response.VehicleMotData[5].Odometer + "</p>" +
								  "<p>M.O.T Number:" + response.VehicleMotData[5].MotNumber + "</p>" +
								  "<p>Advisories:" + response.VehicleMotData[5].AdvisoryNoticeItems + "</p>" +
								   "<p>Reasons for Failure:" + response.VehicleMotData[5].ReasonsForFailure + "</p>" 
								);
								$(".mot_overview6").html(
                               "<p>Test Date:" + response.VehicleMotData[6].TestDate + "</p>" +
                                "<p>Odometer:" + response.VehicleMotData[6].Odometer + "</p>" +
								  "<p>M.O.T Number:" + response.VehicleMotData[6].MotNumber + "</p>" +
								  "<p>Advisories:" + response.VehicleMotData[6].AdvisoryNoticeItems + "</p>" +
								   "<p>Reasons for Failure:" + response.VehicleMotData[6].ReasonsForFailure + "</p>" 
								);
								$(".mot_overview7").html(
                               "<p>Test Date:" + response.VehicleMotData[7].TestDate + "</p>" +
                                "<p>Odometer:" + response.VehicleMotData[7].Odometer + "</p>" +
								  "<p>M.O.T Number:" + response.VehicleMotData[7].MotNumber + "</p>" +
								  "<p>Advisories:" + response.VehicleMotData[7].AdvisoryNoticeItems + "</p>" +
								   "<p>Reasons for Failure:" + response.VehicleMotData[7].ReasonsForFailure + "</p>" 
								);
                    } else {
                        $("#details").html(
                                "<p>ERROR: "+response.ServiceMessage+"</p>"
                        );
						$("#mot_details").html(
                                "<p>ERROR: </p>"
                        );
						$(".road_tax").html(
                                "<p>ERROR: </p>"
                        );
                    }
                });
            });
        });