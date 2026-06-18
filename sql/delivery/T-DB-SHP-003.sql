USE [LewisStoresDb];
GO

-- Update ORD-004-20260509 from Processing to Delivered

UPDATE Deliveries
SET 
    Status = N'Delivered',
    DeliveredAtUtc = GETUTCDATE(),
    UpdatedAtUtc = GETUTCDATE(),
    CurrentLocation = N'Delivered to customer'
WHERE OrderId = N'ORD-004-20260509'
AND Status = N'Processing';



SELECT
    OrderId,
    UserId,
    Status,
    TrackingNumber,
    CurrentLocation,
    ShippedAtUtc,
    EstimatedDeliveryAtUtc,
    DeliveredAtUtc,
    UpdatedAtUtc
FROM Deliveries
WHERE OrderId = N'ORD-004-20260509';