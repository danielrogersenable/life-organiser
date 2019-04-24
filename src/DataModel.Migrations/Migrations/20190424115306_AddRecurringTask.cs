using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataModel.Migrations.Migrations
{
    public partial class AddRecurringTask : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RecurringTaskId",
                table: "LifeTasks",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "RecurringTasks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(maxLength: 5000, nullable: true),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    RecurrenceInterval = table.Column<int>(nullable: false),
                    TaskRecurrenceType = table.Column<int>(nullable: false),
                    TaskTypeId = table.Column<int>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecurringTasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RecurringTasks_TaskTypes_TaskTypeId",
                        column: x => x.TaskTypeId,
                        principalTable: "TaskTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RecurringTasks_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LifeTasks_RecurringTaskId",
                table: "LifeTasks",
                column: "RecurringTaskId");

            migrationBuilder.CreateIndex(
                name: "IX_RecurringTasks_TaskTypeId",
                table: "RecurringTasks",
                column: "TaskTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_RecurringTasks_UserId",
                table: "RecurringTasks",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_LifeTasks_RecurringTasks_RecurringTaskId",
                table: "LifeTasks",
                column: "RecurringTaskId",
                principalTable: "RecurringTasks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LifeTasks_RecurringTasks_RecurringTaskId",
                table: "LifeTasks");

            migrationBuilder.DropTable(
                name: "RecurringTasks");

            migrationBuilder.DropIndex(
                name: "IX_LifeTasks_RecurringTaskId",
                table: "LifeTasks");

            migrationBuilder.DropColumn(
                name: "RecurringTaskId",
                table: "LifeTasks");
        }
    }
}
