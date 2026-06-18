USE [LewisStoresDb];
GO


-- Verify ORD-004-20260509 is stored correctly in Deliveries

SELECT
    OrderId,
    UserId,
    Status,
    Carrier,
    TrackingNumber,
    Origin,
    Destination,
    CurrentLocation,
    ShippedAtUtc,
    EstimatedDeliveryAtUtc,
    DeliveredAtUtc,
    UpdatedAtUtc
FROM Deliveries
WHERE OrderId = N'ORD-004-20260509'
AND UserId = N'user-004'
AND Status = N'Processing'
AND Carrier = N'Lewis Logistics'
AND TrackingNumber = N'LL-ORD-004-20260509'
AND Origin = N'Johannesburg Distribution Centre'
AND Destination = N'321 Elm Street, Borough, State 45678'
AND CurrentLocation = N'Order received at dispatch hub'
AND ShippedAtUtc IS NULL
AND DeliveredAtUtc IS NULL
AND EstimatedDeliveryAtUtc IS NOT NULL
AND UpdatedAtUtc IS NOT NULL;