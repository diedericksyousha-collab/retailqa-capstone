USE [LewisStoresDb];
GO


USE [LewisStoresDb];
GO

-- T-DB-SHP-001
-- Verify shipment record and tracking number persistence

SELECT
    OrderID,
    UserID,
    TrackingNumber,
    Status
FROM Deliveries
WHERE OrderID = 'LWS-72437'
AND TrackingNumber IS NOT NULL;